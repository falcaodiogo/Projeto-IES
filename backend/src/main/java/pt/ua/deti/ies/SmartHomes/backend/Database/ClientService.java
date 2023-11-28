package pt.ua.deti.ies.SmartHomes.backend.Database;

import java.util.List;

public interface ClientService {

    Client createClient(Client client);
    Client getClient(String client_name);
    Client updateClient(Client client);
    void deleteClient(Long clientId);
    List<Client> findAll();
}
