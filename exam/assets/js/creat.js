document.querySelector('.row').addEventListener('click',function() {
    const fetced=fetch('https://64755bade607ba4797dbd083.mockapi.io/exam/api/1/grid' ,{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
       
        body: JSON.stringify({
          image: document.querySelector('#img').value() ,
          button: document.querySelector('#btn').value(),
        }), 
    }
    )
})