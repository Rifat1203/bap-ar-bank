document.getElementById('deposit-button').addEventListener('click', function(){
    const depositinput=document.getElementById('deposit-amount');
    const newdepositamounttext=depositinput.value;
    const newdepositamount = parseFloat(newdepositamounttext);

    

    const totaldeposit=document.getElementById('total-deposit');
    const previousdepositamounttext = totaldeposit.innerText;
    const previousdepositamount = parseFloat(previousdepositamounttext)
    const newdeposittotal=(previousdepositamount)+(newdepositamount);
    const depositfield=totaldeposit.innerText;
     totaldeposit.innerText=newdeposittotal

     const balancetotal=document.getElementById('balance-total');
     const balancetotaltext=balancetotal.innerText;
     const previousbalancetotal= parseFloat(balancetotaltext);
     const newbalancetotal=previousbalancetotal+newdepositamount;
     balancetotal.innerText=newbalancetotal;

    depositinput.value='';
})

// withdraw-button

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawinput=document.getElementById('Withdraw-amount');
    const withdrawinputtext=withdrawinput.value;
    const withdrawAmount=parseFloat(withdrawinputtext);
    console.log(withdrawAmount)


    const withdrawtotal=document.getElementById('withdraw-total');
    const withdrawtotaltext=withdrawtotal.innerText;
    const previouswithdrawAmount=parseFloat(withdrawtotaltext);

    const newwithdrawAmount=previouswithdrawAmount+withdrawAmount;
    withdrawtotal.innerText=newwithdrawAmount;

    const balancetotal=document.getElementById('balance-total');
    const previousbalancetotaltext=balancetotal.innerText;
    const previousbalancetotalamount=parseFloat(previousbalancetotaltext);
    const updatenewbalancetotal=previousbalancetotalamount-withdrawAmount;
    
    balancetotal.innerText=updatenewbalancetotal;


    withdrawinput.value='';

})

