#/bin/bash


PID=`ps -a | grep "node" | awk '{print $1}'`

if [ -z "$PID" -o "$PID" = " " ]; then
    echo "========== No node pid available for deletion =========="
else
    kill $PID
fi