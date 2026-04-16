// class Class{
//     public static void main(String[] args){
//         int l = 28;
//         double d = 12;
//         String m = "sri";
//         boolean p = false;
//         System.out.println(l+ " " + d + " " + m + " " + p);
//     }
// }
// class Class{
//     public static void main(String[] args){
//         float a = 0.5f;
//         float b = 20.0f;
//         System.out.println(a+b);
//         System.out.println(a>b);
//         System.out.println(a%b);
//         System.out.println(a==b);
//         System.out.println(a*b);

//     }
// }
// import java.util.Scanner;

// import java.util.Scanner;

import java.util.Scanner;

class Class{
//      public static void main(String[] args){
// //         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter a number");
//         int a = sc.nextInt();
        
        // System.out.println("a==b : " + (a==b));
        //  System.out.println("a>b : " + (a>b));
        //  System.out.println("a<b : " + (a<b));
        //  System.out.println("a!=b : " + (a!=b));
        //  System.out.println("a<=b : " + (a<=b));
        //  System.out.println("a>=b : " + (a>=b));
        // System.out.println((a>0 && b>0));
        // System.out.println((a>0 || b>0));
        // System.out.println(!(a>0));
    //     a+=5;
    //     System.out.println("a+=5 : "+a);
    //     a-=3;.0
    //     System.out.println("a-=3 : "+a);
    //     a *=2;
    //     System.out.println("a*=2 : "+a);
    //     a *=2;
    //     System.out.println("a*=2 : "+a);
    //     a /=4;
    //     System.out.println("a/=4 : "+a);
    //     a %=3;
    //     System.out.println("a%=3 : "+a);

    //     sc.close();

    // for(int i=0;i<=10;i++){
    //     System.out.println(i);
    // }
    
    // int i=1;
    // do{
    //     System.out.println(i);
    //     i++;
    // }while(i<=5);
    // for(int i=0;i<=20;i++){
    //     if(i%2==0){
    //         System.out.println(i);
    //     }
    // }

    // Scanner sc = new Scanner(System.in);
    // System.out.println("Enter a number");
    // int i = sc.nextInt();
    // for(int j=1;j<=10;j++){
    //     System.out.println(i + " x " + j + " = " + (i*j));
    // }
    // sc.close();
//     int s=0;
//     for(int i=1;i<=10;i++){
//         s+=i;
//     }
//     System.out.println("sum of 1st 10  numbers:"+s);
        // for(int i=10;i>=1;i--){
        //     System.out.println(i);
        // }
        static void evenodd(int m,int n){
            
        if(m>n){
                System.out.println(m+" is greater than "+n);
            }
            else if(m<n){
                System.out.println( n+" is greater than "+m);
            }
            else{
                System.out.println("Both numbers are equal");
            }

        }
        public static void main(String[] args){
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter 1st number");
            int n = sc.nextInt();
            System.out.println("Enter 2nd number");
            int m = sc.nextInt();
            evenodd(m, n);
            sc.close();

        }

    }

