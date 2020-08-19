# ol

## database
1. create databse container   
```docker pull postgres:12```  
```docker run -p 5434:5434 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=ol --name pg12 -p 15432:5432 -d postgres:12```  

2. excute databse container   
```docker exec -it pg12 bash```

3. access database   
```su - postgres```   
```psql ol```
