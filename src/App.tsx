import { useState } from 'react'
import { Button, Modal } from 'antd'
import 'antd/dist/reset.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow-lg mb-6">🎨 杜思远的第一个前端页面oi！</h1>
      <Button
        type="default"
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        点击我打开弹窗oioioi
      </Button>
      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>
          玩反应测试小游戏：
          <a
            href="https://dsyyy830.github.io/reaction-game-oioioi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            点击这里跳转！
          </a>
        </p>
      </Modal>
    </div>
  )
}

export default App
