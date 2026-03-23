import Message from "../models/Message";
const messageSeeder = async () => {
  try {
    const messages = [
      {
        chatId: "645187932131231231231231",
        senderId: "645187932131231231231231",
        receiverId: "645187932131231231231232",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231231",
        senderId: "645187932131231231231232",
        receiverId: "645187932131231231231231",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231231",
        senderId: "645187932131231231231231",
        receiverId: "645187932131231231231232",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231232",
        senderId: "645187932131231231231231",
        receiverId: "645187932131231231231233",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231232",
        senderId: "645187932131231231231233",
        receiverId: "645187932131231231231231",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231232",
        senderId: "645187932131231231231231",
        receiverId: "645187932131231231231233",
        message: "Hello World",
        image: "",
      },
      {
        chatId: "645187932131231231231233",
        senderId: "645187932131231231231231",
        receiverId: "645187932131231231231234",
        message: "Hello World",
        image: "",
      },

    ];
    await Message.deleteMany({});
    await Message.insertMany(messages);
    console.log("Messages deleted");
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export default messageSeeder;