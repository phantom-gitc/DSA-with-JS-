// Q1 : Right Angle Triangle 

const prompt = require('prompt-sync')();

const n = Number(prompt("Enter the number "));

for(i = 1 ; i<=n ; i++){
    for(j = 1 ; j<=i ; j++){
        process.stdout.write(" * ") ;
        // process.stdout.write(j + "  ");
        // process.stdout.write(i + "  ");



    }
    console.log();
    
}

// Q2: Inverted Right angle Triangle 

// temp = 5 ; 
// for(i = 1 ; i<=n ; i++){
//     for(j = 1 ; j<=temp ; j++){
//         process.stdout.write(" * ");
//     }
//     temp--;

//     console.log();
    
// }


// for(let i = 1  ; i <= n ; i++){
//     for(j = 1 ; j<= n - i + 1 ; j++){
//         process.stdout.write(" * ");

//     }

//     console.log();
    
// }


// Q3:Mirror Right Angle Triangle 

// for(let i = 1 ; i<=n ; i++){
//     for(j=1 ; j<=n-i ; j++){
//         process.stdout.write("  ")
//     }
//     for(let j = 1 ; j<=i ;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// Q4: Triangle Pattern 

// for(let i = 1 ; i<=n  ; i++){
//     for(j = 1 ; j<=n - i ; j++){
//         process.stdout.write(" ");
//     }
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write("* ")
//     }

//     console.log();
// }



// Q5 : X - Pattern 


// for(let i = 1 ; i<=n ; i++){
//     for(j=1 ; j<=n ; j++){
//         if(i==j || i+j == n+1){

//             process.stdout.write("*")
//         }else process.stdout.write(" ")
//     }
//     console.log();
    
// }

// 

