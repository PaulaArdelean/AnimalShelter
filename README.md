# Animal Shelter
AnimalShelter is an example project that manages adoption of pets from a shelter

## Description

This project is an example for the implementation of CQRS and Event Sourcing in a basic REST API type application using Nest JS and EventStoreDb.

The Client is a simple Angular application used to interact with the back-end

## Installation

For the back-end, from the root of the repository:
```bash
cd AnimalShelter-API
docker compose up
```
For the front-end client
```bash
cd AnimalShelter-Client/AnimalShelter
npm install
npm run start
```

## Structure

### System Context Diagram
```mermaid
  graph TD
    User([User])-.-uses-.->AnimalShelterSystem(AnimalShelterSystem)

```

### Container Diagram
```mermaid
  graph TD
    User([User])-.-uses-.->AnimalShelter(Web application)
    AnimalShelter-.-request-.->AnimalShelter-Backend(REST API)
    AnimalShelter-Backend -.-response-.->AnimalShelter
```

### Component Diagram
```mermaid
graph TD
    ClientApp(Client App)-->AnimalController
    subgraph web
    AnimalController
    end
    subgraph bus
    AnimalCommandBus
    AnimalQueryBus
    end
    subgraph commandhandlers
    CreateAnimalHandler
    DeleteAnimalHandler
    end
    subgraph events
    EventHandler
    EventStore
    end
    subgraph data
      DataLayer
    end
    AnimalController-->AnimalService
    AnimalService-->AnimalCommandBus
    AnimalController-->AnimalQueryBus
    AnimalCommandBus-->CreateAnimalHandler
    AnimalCommandBus-->DeleteAnimalHandler
    CreateAnimalHandler-->EventHandler
    DeleteAnimalHandler-->EventHandler
    EventHandler-->EventStore
    EventHandler-->DataLayer
    AnimalQueryBus-->DataLayer
```

### Code
```mermaid
classDiagram
    AnimalController o--AnimalService
    AnimalService o-- CommandBus
    AnimalController: create()
    AnimalController: findAll()
    AnimalController: findOne()
    AnimalController: remove()
    AnimalService : createAnimal()
    AnimalService : deleteAnimal()    
```