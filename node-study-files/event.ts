// way to allow the functions launch an event and the others values listen it

// to create an emitter us use it
import EventEmitter from "node:stream";

const emitter = new EventEmitter();

// to launch an event
function eventLaunch() {
  console.log("code working");
  //emit the event
  emitter.emit("code ended", "file complete runned");
}

// to listen the event
emitter.on("code ended", (data) => {
  console.log(data);
});

eventLaunch();

// few special listeners

// once - run only one time this listener
// off - desactive/remove one listener

//can be used the process to listen global events
process.on('message', (data)=>{
  console.log(JSON.stringify(data));
})