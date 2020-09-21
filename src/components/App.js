import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import localStorage from './hooks/localStorage'

function App() {

    const [html, setHtml] = localStorage('html','')
    const [css, setCSS] = localStorage('css','')
    const [js, setJs] = localStorage('js','')
    const [srcDoc, setSrcDoc] = useState('')
    useEffect(() => {
        const timer = setInterval(() => {
           setSrcDoc( `
           <html>${html}</html>
           <style>${css}</stlye>
           <script>${js}</script>
           `)
        }, 250)

        return() => clearTimeout(timer)
    }, [html, css, js])

  

    return (
        <>
            <div className="pane top-pane">
                <Editor language="xml"
                    displayName="Html"
                    value={html}
                    onChange={setHtml}
                />
                <Editor language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCSS}
                />
                <Editor language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />

            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}

export default App
