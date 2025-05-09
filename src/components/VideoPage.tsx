// import React from 'react';

// const VideoPage: React.FC = () => {
//   return (
//     <div style={{ 
//       backgroundColor: 'black', 
//       minHeight: '100vh', 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//       paddingBottom: '20px', // Optional: to balance the bottom
//       paddingLeft: '20px',
//       paddingRight: '20px'
//     }}>
//       <div style={{ maxWidth: '800px', width: '100%' }}>
//       <iframe width="700" height="400" src="https://www.youtube.com/embed/L_noPJLe9lA?si=1NCVUL-BlGt3SUOi" title="YouTube video player" 
//        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;



import React from 'react';

const VideoPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center py-10 px-5 text-white font-sans">
      {/* Main Title Section */}
      <div className="text-center mb-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent leading-tight">
          The idea behind 23 ventures
        </h1>
        
       
        
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-transparent mx-auto mb-10"></div>
      </div>
     
      
      {/* Video Container */}
      <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-lg shadow-green-400/30 relative">
        <iframe
          className="w-full h-96 md:h-[450px] border-none block"
          src="https://www.youtube.com/embed/L_noPJLe9lA?si=1NCVUL-BlGt3SUOi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        
        <div className="absolute -bottom-4 left-0 right-0 text-center">
         
        </div>
      </div>
    </div>
  );
};

export default VideoPage;