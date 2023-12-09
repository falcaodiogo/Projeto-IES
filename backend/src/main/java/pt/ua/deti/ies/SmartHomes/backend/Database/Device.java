package pt.ua.deti.ies.SmartHomes.backend.Database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Device")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "device_id")
    private long deviceId;

    @ManyToOne
    @JoinColumn(name = "house_id", nullable = false)
    @NotBlank(message = "House is mandatory")
    private House house;

    @NotBlank(message = "Device name is mandatory")
    private String name;

    @NotBlank(message = "House area is mandatory")
    private String houseArea;

    @Enumerated(EnumType.STRING)
    private DeviceType type;
}

