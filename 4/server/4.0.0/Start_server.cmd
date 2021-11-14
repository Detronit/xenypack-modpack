@echo off

rem Variables 
set jar=forge-1.16.5-36.2.4.jar
set java_path=%java_home%


IF [%java_path%] == [] GOTO use_default
	set java_path=%java_path%\bin\
:use_default

set comm=%java_path%java.exe -server -Xmx2500m -Xms1600m -XX:+UseG1GC -XX:PermSize=256m -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -jar %jar% nogui

echo Starting server
echo Running:
echo %comm%
echo .
echo ==========================================================
%comm%
:server_loop

    
    echo If you want to completely stop the server process now, press Ctrl+C before the time is up!
    for /l %%i in (10,-1,1) do (
        echo Restarting server in %%i
        choice /t 1 /d y > nul
    )
    echo Starting server now
	%comm%
	echo Server process finished
    goto :server_loop

echo Exiting...
pause