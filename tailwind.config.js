// tailwind.config.js (excerpt)
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT:'#3f6cca', ...require('tailwindcss/colors').transparent },
        secondary: '#18ab9a',
        success:   '#2eae4f',
        warning:   '#e3a008',
        background:'#f9fafb',
        surface:   '#ffffff',
        text: {
          primary:   '#1f2937',
          secondary: '#4b5563',
          inverse:   '#ffffff'
        }
      },
      fontSize: {
        h1:['2.25rem',{lineHeight:'1.2'}],
        h2:['1.875rem',{lineHeight:'1.25'}],
        h3:['1.5rem',{lineHeight:'1.3'}],
        h4:['1.25rem',{lineHeight:'1.35'}],
        h5:['1.125rem',{lineHeight:'1.4'}],
        h6:['1rem',{lineHeight:'1.45'}],
        'body-lg':['1rem',{lineHeight:'1.6'}],
        'body-md':['0.875rem',{lineHeight:'1.6'}],
        'body-sm':['0.75rem',{lineHeight:'1.6'}],
        caption:['0.625rem',{lineHeight:'1.4'}]
      },
      spacing:  { 0:'0px',1:'4px',2:'8px',3:'12px',4:'16px',5:'20px',6:'24px',8:'32px',10:'40px',12:'48px',16:'64px',20:'80px' },
      borderRadius:{ sm:'2px',md:'4px',lg:'8px',xl:'16px','2xl':'24px' }
    }
  },
  plugins: [require('@shadcn/ui')]
};
