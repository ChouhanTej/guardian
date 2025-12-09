{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const path = require('path');\
\
const app = express();\
const PORT = process.env.PORT || 3000;\
\
app.use(express.static(path.join(__dirname, '')));\
\
app.get('/api/safety-data', (req, res) => \{\
    res.json(\{ message: 'Safety systems are operational.' \});\
\});\
\
app.get('*', (req, res) => \{\
    res.sendFile(path.join(__dirname, 'index.html'));\
\});\
\
app.listen(PORT, () => \{\
    console.log(`Server running on http://localhost:$\{PORT\}`);\
\});\
}