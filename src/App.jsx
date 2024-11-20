import Accodian from './components/Accodian';
function App() {
  const faqs = [
    {
      title: "What's the one item you can't live without?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "What is your favorite line from any movie",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: " What's the weirdest gift you've ever received ?",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ad similique delectus rerum ut magnam ratione officiis, maxime vero adipisci! Optio ipsum magnam quam quos soluta porro perspiciatis incidunt deserunt"
    },
  ];
  return (
    <>
     <Accodian data={faqs}/>
    </>
  )
}

export default App
