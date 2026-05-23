# COMMANDS – LEARNING NOTES

## NETWORK

* This command is mainly used in Windows systems to display network configuration details. It shows information such as the IP address, subnet mask, and default gateway assigned to the system. It is commonly used to check whether the system is properly connected to a network and to troubleshoot network-related issues. In Linux systems, this command is not used and is replaced by the ip command.
<br>`ipconfig`

* This command is used in Linux to display IPv4 address information of all network interfaces. It helps in identifying the IPv4 address assigned to the system and checking whether the network interface is active. It is very useful when working in environments that use only IPv4 networking.
<br>`ip -4 addr`

* This command displays IPv6 address details of network interfaces in Linux. It is used to verify IPv6 configuration and connectivity. Since IPv6 is the newer version of the Internet Protocol, this command is useful in modern networking setups where IPv6 is enabled.
<br>`ip -6 addr`

* This command displays network connections, routing tables, interface statistics, and port information. It is mainly used to monitor network activity and understand how the system is communicating over the network. Although still used, it is considered outdated and replaced by the ss command in newer Linux systems.
<br>`netstat`

* This command shows all network connections, including both listening and active connections. It helps in identifying open ports and ongoing connections, which is useful for debugging network problems and checking system security.
<br>`netstat -a`

* This command displays only TCP connections. It is useful when troubleshooting applications that rely on TCP, such as web servers or database connections. TCP is a reliable and connection-based protocol.
<br>`netstat -at`

* This command lists all listening ports on the system. It helps in identifying services that are waiting for incoming connections. System administrators often use this command to verify whether a service is running and listening on the correct port.
<br>`netstat -l`

* This command shows UDP connections. It is useful for checking applications that use UDP, such as DNS or streaming services. UDP is faster than TCP but does not guarantee reliable delivery.
<br>`netstat -u`

* This command uses curl to fetch and display the content of a web page directly in the terminal. It is commonly used to test websites, APIs, and server responses without using a browser. Curl supports many network protocols.
<br>`curl https://techwithtim.net`

* This command sends an HTTP POST request to the specified URL. It is used to submit data or trigger server-side actions. POST requests are commonly used in web forms and APIs.
<br>`curl -X POST http://techwithtim.net`

* This command sends a POST request along with data parameters. It is useful for testing form submissions and backend services. The data is sent in the request body to the server.
<br>`curl -X POST -data "p1=value1 & p2=value2" http://techwithtim.net`

* This command downloads the content from the given URL and saves it into a file named response. It is useful for saving web pages, API responses, or files locally instead of displaying them on the screen.
<br>`curl -o response https://techwithtim.net`

* This command displays help information for curl. It lists available options and usage instructions. It is very useful for learning new curl features and understanding command syntax.
<br>`curl --help`

* This command sends a POST request with a custom HTTP header. It is commonly used when working with APIs that require specific content types such as JSON. Headers inform the server how to process the request data.
<br>`curl --header "Content-type:application/json" -X POST -data "p1=value1 & p2=value2" `http://techwithtim.net

* This command checks network connectivity between the system and the specified host. It sends small packets and waits for a response to measure reachability and response time. It is widely used to test internet connectivity and detect network issues.
<br>`ping google.com`

---

## how to take input

* To read the input from user, use enter a 'bob' it will store in a variable 'x'
<br>`read x`

* Display msg as a 'enter a number:' then user enter a number that it is store in a 'x' varable
<br>`read -p "enter a number: " x`

<br>` `

## how to print

* it is used for dispaly the 'hello world' on screen
<br>`echo "hello world"`

* to print the value which is store in a variable 'x' 
<br>`echo "$x"`

* it will display data which is in that file
<br>`cat filename.txt`

* it will overwrite that file  and replace the entire contents
<br>`echo "jgk" > filename.txt`

* if we use two > symblos then this 'jgk' word append into the file
<br>`echo "jgk" >> filename.txt`

---

## Folder cmd's
* to create a single folder
<br>`mkdir folder_name`

* to create a multiple floders at time in a single folder
<br>`mkdir folder_name1 folder_name2 folder_name3`

* to create a folder structure
<br>`mkdir -p project/src/components`
