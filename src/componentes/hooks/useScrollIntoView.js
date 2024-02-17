import { useEffect }  from 'react'


export const useScrollIntoView = (elementRef, currentIndex) => { 

    useEffect(() =>{
      const elNode = elementRef.current;
      const imgNodes = elNode.querySelectorAll('li > img')[currentIndex];
      if (imgNodes) {
        imgNodes.scrollIntoView({
          behavior: 'auto'
        })
      }
    },[elementRef, currentIndex])
   
  }