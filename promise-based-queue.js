class PromiseQueue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  add(task) {
    this.queue.push(task);
    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessing) return;

    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    const task = this.queue.shift();

    try {
      await task();
    } catch (error) {
      console.error("Error in task:", error);
    }

    this.isProcessing = false;
    this.processQueue();
  }
}

const queue = new PromiseQueue();

queue.add(async () => {
  console.log("Task 1");
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

queue.add(async () => {
  console.log("Task 2");
  await new Promise((resolve) => setTimeout(resolve, 2000));
});

queue.add(async () => {
  console.log("Task 3");
  await new Promise((resolve) => setTimeout(resolve, 500));
});

queue.add(async () => {
  console.log("Task 4");
  await new Promise((resolve) => setTimeout(resolve, 1500));
});

queue.add(async () => {
  console.log("Task 5");
  await new Promise((resolve) => setTimeout(resolve, 750));
});
