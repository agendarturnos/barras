import { useState } from 'react'
import { useZxing } from 'react-zxing'
import './App.css'

function App() {
  const [result, setResult] = useState('')
  const { ref } = useZxing({
    onDecodeResult(decoded) {
      setResult(decoded.getText())
    },
    constraints: { video: { facingMode: 'environment' } },
  })

  return (
    <div className="scanner">
      <h1>Escáner de códigos de barras</h1>
      <video ref={ref} />
      <p>
        {result
          ? `Código detectado: ${result}`
          : 'Apunta la cámara hacia un código de barras.'}
      </p>
    </div>
  )
}

export default App
