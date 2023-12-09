package pt.ua.deti.ies.SmartHomes.backend.HouseData;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.Instant;

@AllArgsConstructor
@Getter
class CostData {
    private Instant time;
    private long electricity;
    private long water;
    private long total;
}
