tailwind.config = {
      theme: {
        extend: {
          animation: {
                'slide-in': 'slideIn 1s linear infinite',
                'spin-fast': 'spin 0.8s linear infinite',
                'blob': "blob 7s infinite",
                'wiggle': 'wiggle 3s linear infinite',
      
                },
                
          keyframes: {
                slideIn: {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(0)' },
                },
                spin: {
                  '0%': { transform: 'rotate(0)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
                blob: {
                  "0%": {
                    transform: "translate(0px, 0px)",
                  },
                  "33%": {
                    transform: "translate(30px, 0px)",
                  },
                  "66%": {
                    transform: "translate(-30px, 0px)",
                  },
                  "100%": {
                    transform: "tranlate(0px, 0px)",
                  },
                },
                wiggle: {
                  "0%, 100%": {
                    opacity: "1",
                  },
                  "50%": {
                    opacity: "0.5",
                  },
                },
                },
                
        }
      }
    }
    
    
    
 /*   
    

@keyframes pulse {
   
}*/