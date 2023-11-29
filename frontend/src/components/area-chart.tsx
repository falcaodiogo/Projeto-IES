import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

type CustomAreaChartProps = {
  data: object[];
  dataKey: string;
  className?: string;
  height?: number | string | undefined;
  unitOfMeasurement?: string;
  width?: number | string | undefined;
};

export function CustomTooltip({
  payload,
  label,
  active,
  unitOfMeasurement,
}: TooltipProps<number, number> & {
  unitOfMeasurement: string;
}) {
  if (active) {
    return (
      <div className="rounded-lg bg-popover px-4 py-3 shadow dark:shadow-lg">
        <p className="font-semibold">
          {payload ? payload[0].value : 0} {unitOfMeasurement}
        </p>
        <p className="text-sm">{label}</p>
      </div>
    );
  }

  return null;
}

export function CustomAreaChart({
  data,
  dataKey,
  className = "fill-primary",
  height = 160,
  unitOfMeasurement = "",
  width = "100%",
}: CustomAreaChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip
          content={<CustomTooltip unitOfMeasurement={unitOfMeasurement} />}
        />
        <Area
          className={className}
          type="monotone"
          dataKey={dataKey}
          fill="inherit"
          strokeWidth={0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
