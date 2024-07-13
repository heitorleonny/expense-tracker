'use client'

import { useState } from "react";
import { Template } from "./components/template";
import { useTaskService } from "./resources/task/task.service"; 


export default function Home() {

  const [tasks, setTasks] = useState<[]>([]);
  const taskService = useTaskService();

  function teste(){
    const response = taskService.findAllTasks();
    console.table(response)

  }

  return (
    <Template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi, sapiente reprehenderit ipsum iste quae veniam pariatur repellendus perspiciatis sit est maxime, corporis voluptas quia rem eius nostrum possimus temporibus.</p>
     <button onClick={teste}>Clica</button>
    </Template>
  );
}
