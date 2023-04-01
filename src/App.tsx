import  './App.css';
import Video from './assets/components/Video';

function App() {
  //inicialize the likes, messages and shares
  let likes = 111;
  let messages = 222;
  let shares = 333;

  return (
    <div className="app">
      <div className="app_videos">
        <Video
          likes={likes}
          messages={messages}
          shares={shares}
          username="Video 1"
          description="This is a description"
          Music="Music title"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={likes}
          messages={messages}
          shares={shares}
          username="Video 2"
          description="This is a description"
          Music="Music title"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video
          likes={likes}
          messages={messages}
          shares={shares}
          username="Video 2"
          description="This is a description"
          Music="Music title"
          url="https://youtu.be/8Zs7ReAEYUU"
        />
        <Video /> 
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
