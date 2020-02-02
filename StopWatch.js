//This file demonstrate the StopWatch functionalities like StartTimer, StopTimer, ResetTImer, ShowTime
//Constructor function for StopWatch
function StopWatch() {
    let startTime = 0, stopTime = 0, running=false

    //function to start timer
    this.start = function () {
        if (running) {
            throw new Error('Timer started already')
        }
        running = true
        startTime = Date.now()
        // console.log('start:', startTime)
    }

    //function to reset timer
    this.reset = function () {
        if(startTime && !stopTime){
            throw new Error('Stop to Reset')
        }
        duration = 0
        startTime = 0
        stopTime = 0
    }

    //stop timer
    this.stop = function () {
        if (!running) {
            throw new Error('Timer stopped already')
            return
        }
        stopTime = Date.now()
        running = false
        // console.log(stopTime)
    }

    //Getter property for duration
    //Duration variable acts as private here, as user should not overwrite its value
    Object.defineProperty(this, 'duration', {
        get: function () {
            return getTimeDifference()
        }
    })

    //To calculate time difference between start and stop
    function getTimeDifference() {
        //Date.now returns value in Epoch Milliseconds
        let endTime = stopTime || Date.now()
        return (endTime - startTime) / 1000
    }
}

// try {
//     let sw1 = new StopWatch()
//     sw1.start()
//     sw1.stop()
//     console.log(sw1.duration)
//     sw1.reset()
//     console.log(sw1.duration)
//     sw1.start()
//     sw1.stop()
//     console.log(sw1.duration)
// }
// catch (e) {
//     console.log(e.message)
// }
