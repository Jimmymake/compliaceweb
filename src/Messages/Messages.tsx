// import React from 'react'
// import { Container } from '@mui/material'

// const Messages = () => {
//   return (
//     <Container>


//     </Container>
//   )
// }

// export default Messages
import React, { useState } from 'react';
import { Box, Container, Paper, Typography, TextField, Button, Stack, Avatar } from '@mui/material';

const mockMessages = [
  { id: 1, sender: 'Alice', text: 'Hi Bob!', time: '10:00', isMe: false },
  { id: 2, sender: 'Bob', text: 'Hello Alice!', time: '10:01', isMe: true },
  { id: 3, sender: 'Alice', text: 'How are you?', time: '10:02', isMe: false },
  { id: 4, sender: 'Bob', text: 'I am good, thanks!', time: '10:03', isMe: true },
];

const Messages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: 'Bob',
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
      },
    ]);
    setInput('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight: '87vh', // 70% of viewport height
        height: '87vh',    // set height relative to screen
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f0f4fa',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Chat
      </Typography>
      <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
        {messages.map((msg) => (
          <Stack
            key={msg.id}
            direction="row"
            justifyContent={msg.isMe ? 'flex-end' : 'flex-start'}
            alignItems="flex-end"
            spacing={1}
            sx={{ mb: 1 }}
          >
            {!msg.isMe && (
              <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: 16 }}>
                {msg.sender.charAt(0)}
              </Avatar>
            )}
            <Box
              sx={{
                bgcolor: msg.isMe ? 'primary.main' : 'grey.200',
                color: msg.isMe ? 'white' : 'black',
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: 300,
              }}
            >
              <Typography variant="body2">{msg.text}</Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {msg.time}
              </Typography>
            </Box>
            {msg.isMe && (
              <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32, fontSize: 16 }}>
                B
              </Avatar>
            )}
          </Stack>
        ))}
      </Box>
      <Stack direction="row" spacing={1}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Stack>
    </Paper>
  </Container>
  );
};

export default Messages;