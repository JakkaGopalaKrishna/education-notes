#Practice Drill 2

#Pipes

Prints the first three lines of the book
    head -n 3 Harry-Potter-and-the-Goblet-of-Fire.txt

Prints the last ten lines of the book
    tail -n 10 Harry-Potter-and-the-Goblet-of-Fire.txt

Counts how many times the word "Harry" occurs in the book
    grep -o -w "Harry" Harry-Potter-and-the-Goblet-of-Fire.txt | wc -l

Counts how many times the word "Ron" occurs in the book
    grep -o -w "Ron" Harry-Potter-and-the-Goblet-of-Fire.txt | wc -l

Counts how many times the word "Hermione" occurs in the book
    grep -o -w "Hermione" Harry-Potter-and-the-Goblet-of-Fire.txt | wc -l

Counts how many times the word "Dumbledore" occurs in the book
    grep -o -w "Dumbledore" Harry-Potter-and-the-Goblet-of-Fire.txt | wc -l

Prints lines from 100 through 200 in the book
    sed -n '100,200p' Harry-Potter-and-the-Goblet-of-Fire.txt

Counts the total number of unique words in the book
    tr -c 'A-Za-z' '\n' < Harry-Potter-and-the-Goblet-of-Fire.txt | tr 'A-Z' 'a-z' | sort | uniq | wc -l


#Processes, ports

List your browser's process ids (pid) and parent process ids(ppid)
    ps -eo pid,ppid,cmd | grep -i firefox

output: 3257    2372 /snap/firefox/6565/usr/lib/firefox/firefox


to find the browser process
    ps -e | grep -i firefox

    pkill firefox
This stops all Firefox-related processes safely.

Stop the browser using PID
    kill <PID>

if it is not stop means the last option is (Force stop)
    kill -9 <PID>
then immediately kills the process without cleanup.


Top 3 processes by CPU usage

CPU usage shows how much processor time a process is using.
Linux allows sorting processes based on CPU usage.
    ps -eo pid,ppid,cmd,%cpu --sort=-%cpu | head -n 4

ps -e → shows all processes
o → selects output columns
%cpu → CPU usage
--sort=-%cpu → sorts by highest CPU usage
head -n 4 → displays top 3 processes

Top 3 processes by memory usage

Memory usage shows how much RAM a process consumes.
Processes can be sorted by memory usage using ps.
    ps -eo pid,ppid,cmd,%mem --sort=-%mem | head -n 4

#5)Python provides a built-in lightweight HTTP server

    python3 -m http.server 8000
    
python3 -- 3 is a version of python
-m http.server -- runs Python’s built-in HTTP server module.
Port 8000 is commonly used for development.

to stop the server 8000, in new terminal find the process using port 8000.
lsof -i :8000
now kill that python3 using PID.
kill PID

Ports below 1024 are privileged ports,Root access is required to use them.
sudo python3 -m http.server 90

To display all active TCP and UDP connections with PIDs:(ss is the modern replacement for netstat)
ss -tulnp

To find which process is using port 5432:
lsof -i :5432

