package pt.ua.deti.ies.SmartHomes.backend.HouseData;

import com.influxdb.client.QueryApi;
import com.influxdb.query.FluxRecord;
import com.influxdb.query.FluxTable;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pt.ua.deti.ies.SmartHomes.backend.Devices.DeviceType;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("service/houses")
public class HouseDataController {
    private QueryApi queryApi;

    @GetMapping("{id}/electricity")
    public ResponseEntity<List<ElectricityData>> getElectricity(@PathVariable String id) {
        List<ElectricityData> data = new ArrayList<>();
        String parametrizedQuery = String.format(
                "from(bucket: \"smarthomes\") |> range(start: -1d) |> filter(fn: (r) => r._measurement == \"%s\") |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\") |> drop(columns: [\"_start\", \"_stop\", \"_measurement\"])", id);

        List<FluxTable> result = queryApi.query(parametrizedQuery, "smarthomes");

        HttpStatus code = HttpStatus.OK;

        try {
            for (FluxTable fluxTable : result) {
                for (FluxRecord fluxRecord : fluxTable.getRecords()) {
                    ElectricityData electricityData = new ElectricityData(
                            fluxRecord.getTime(),
                            (long) fluxRecord.getValueByKey("grid_renewable"),
                            (long) fluxRecord.getValueByKey("house_solar"),
                            (long) fluxRecord.getValueByKey("house_wind"),
                            (long) fluxRecord.getValueByKey("house_grid_exchange"),
                            (long) fluxRecord.getValueByKey("house_total"),
                            (long) fluxRecord.getValueByKey("house_self_sufficiency"),
                            (long) fluxRecord.getValueByKey("house_renewable"));
                    data.add(electricityData);
                }
            }
            if (data.isEmpty()) {
                code = HttpStatus.NOT_FOUND;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            code = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(data, code);
    }

    @GetMapping("{id}/environment")
    public ResponseEntity<List<EnvironmentData>> getEnvironment(@PathVariable String id) {
        List<EnvironmentData> data = new ArrayList<>();
        String parametrizedQuery = String.format(
                "from(bucket: \"smarthomes\") |> range(start: -1d) |> filter(fn: (r) => r._measurement == \"%s\") |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\") |> drop(columns: [\"_start\", \"_stop\", \"_measurement\"])", id);

        List<FluxTable> result = queryApi.query(parametrizedQuery, "smarthomes");

        HttpStatus code = HttpStatus.OK;

        try {
            for (FluxTable fluxTable : result) {
                for (FluxRecord fluxRecord : fluxTable.getRecords()) {
                    EnvironmentData environmentData = new EnvironmentData(
                            fluxRecord.getTime(),
                            (long) fluxRecord.getValueByKey("house_self_sufficiency"),
                            (long) fluxRecord.getValueByKey("house_renewable"),
                            (long) fluxRecord.getValueByKey("emissions"),
                            List.of(
                                (long) fluxRecord.getValueByKey("renewable_forecast_day_0"),
                                (long) fluxRecord.getValueByKey("renewable_forecast_day_1"),
                                (long) fluxRecord.getValueByKey("renewable_forecast_day_2")
                            ),
                            List.of(
                                (long) fluxRecord.getValueByKey("renewable_forecast_hour_0"),
                                (long) fluxRecord.getValueByKey("renewable_forecast_hour_1"),
                                (long) fluxRecord.getValueByKey("renewable_forecast_hour_2")
                            ));
                    data.add(environmentData);
                }
            }
            if (data.isEmpty()) {
                code = HttpStatus.NOT_FOUND;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            code = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(data, code);
    }

    @GetMapping("{id}/water")
    public ResponseEntity<List<WaterData>> getWater(@PathVariable String id) {
        List<WaterData> data = new ArrayList<>();
        String parametrizedQuery = String.format(
                "from(bucket: \"smarthomes\") |> range(start: -1d) |> filter(fn: (r) => r._measurement == \"%s\") |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\") |> drop(columns: [\"_start\", \"_stop\", \"_measurement\"])", id);

        List<FluxTable> result = queryApi.query(parametrizedQuery, "smarthomes");

        HttpStatus code = HttpStatus.OK;

        try {
            for (FluxTable fluxTable : result) {
                for (FluxRecord fluxRecord : fluxTable.getRecords()) {
                    WaterData waterData = new WaterData(
                            fluxRecord.getTime(),
                            (long) fluxRecord.getValueByKey("water_kitchen"),
                            (long) fluxRecord.getValueByKey("water_bath"),
                            (long) fluxRecord.getValueByKey("water_garden"),
                            (long) fluxRecord.getValueByKey("water_other"),
                            (long) fluxRecord.getValueByKey("water_total"),
                            (long) fluxRecord.getValueByKey("water_forecast_today"));
                    data.add(waterData);
                }
            }
            if (data.isEmpty()) {
                code = HttpStatus.NOT_FOUND;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            code = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(data, code);
    }

    @GetMapping("{id}/costs")
    public ResponseEntity<CostData> getCosts(@PathVariable String id) {
        String parametrizedQuery = String.format(
                "from(bucket: \"smarthomes\") |> range(start: -1d) |> filter(fn: (r) => r._measurement == \"%s\") |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\") |> drop(columns: [\"_start\", \"_stop\", \"_measurement\"])", id);

        List<FluxTable> result = queryApi.query(parametrizedQuery, "smarthomes");

        HttpStatus code = HttpStatus.OK;

        double electricity = 0;
        double water = 0;
        double today = 0;

        try {
            for (FluxTable fluxTable : result) {
                for (FluxRecord fluxRecord : fluxTable.getRecords()) {
                    electricity += (double) fluxRecord.getValueByKey("costs_water");
                    water += (double) fluxRecord.getValueByKey("costs_electricity");
                    today += (double) fluxRecord.getValueByKey("costs_total");
                }
            }
            if (today == 0) {
                code = HttpStatus.NOT_FOUND;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            code = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        CostData data = new CostData(electricity, water, today);
        return new ResponseEntity<>(data, code);
    }

    @GetMapping("{id}/devices")
    public ResponseEntity<List<DeviceData>> getDevices(@PathVariable String id) {
        List<DeviceData> data = new ArrayList<>();
        String parametrizedQuery = String.format(
                "from(bucket: \"smarthomes\") |> range(start: -5m) |> filter(fn: (r) => r._measurement == \"%s\") |> last() |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\") |> drop(columns: [\"_start\", \"_stop\", \"_measurement\"])", id);

        List<FluxTable> result = queryApi.query(parametrizedQuery, "smarthomes");

        HttpStatus code = HttpStatus.OK;

        try {
            for (FluxTable fluxTable : result) {
                for (FluxRecord fluxRecord : fluxTable.getRecords()) {
                    data.add(new DeviceData(0, DeviceType.AC, "AC", "LR", (long) fluxRecord.getValueByKey("device_0")));
                    data.add(new DeviceData(1, DeviceType.LIGHT, "Light", "LR", (long) fluxRecord.getValueByKey("device_1")));
                    data.add(new DeviceData(2, DeviceType.TV, "TV", "LR", (long) fluxRecord.getValueByKey("device_2")));
                }
            }
            if (data.isEmpty()) {
                code = HttpStatus.NOT_FOUND;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            code = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(data, code);
    }
}
