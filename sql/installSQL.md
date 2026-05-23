# commands
> execute this commands in local terminal

```bash
sudo apt update
sudo apt install mysql-server
Y   #Selecting yes
# mysqld is running as pid  30478
sudo mysql -u root -p
# Enter password: 
mysql> CREATE USER 'krishna_db'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'krishna_db'@'localhost';
mysql> exit;
```
# Download MYSQL WorkBench
* Open browser and search the 'mysql.com'
* In footer Downloads select the 'MYSQL Workbench'
* Select a Operating System as 'Ubuntu Linux'
* Select latest version 64bit and download
* Open terminal and execute this commands

``` bash
cd Downloads/
# sudo apt install ./<package_name>
sudo apt install ./mysql-workbench-community_8.0.47-1ubuntu24.04_amd64.deb
Y   #Selecting yes
```

# Open MYSQL WorkBench
* Open MYSQL WorkBench in laptop search it and open it.
* MYSQL Connections add
  {
   connection name : krishna_db
   hostname: localhost
   root : krishna_db
  }
* Now open that new connection with password id 'password'