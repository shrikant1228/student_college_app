import java.util.Scanner;
public class array {
    // public static void main(String[] args){
    //     Scanner sc= new Scanner(System.in);
    //     int[] marks=new int[5];
    //     System.out.println("enter 5 students marks:");
    //     for(int i=0;i<marks.length;i++){
    //         System.out.println("marks"+(i+1)+":");
    //         marks[i]=sc.nextInt();
    //         // System.out.println("5 student marks are:"+marks[i]);
    //     }
    //     int sum=0;
    //     for(int mark:marks){
    //         sum+=mark;
    //     }
    //     System.out.println("total marks:"+sum);
    //     double avg=(double) sum/marks.length;
    //     System.out.println("students avg marks:"+avg);
        
    //     sc.close();
    // }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the size of array:");
        int size=sc.nextInt();
        int[] arr=new int[size];
        System.out.println("enter the elements of array:");
        for(int i=0;i<arr.length;i++){
            arr[i]=sc.nextInt();
        }
       
       int smallest=arr[0];
       //int largest=arr[0]; 
         for(int i=1;i<arr.length;i++){
            if(arr[i]<smallest){
            //if(arr[i]>largest){
                //largest=arr[i];
                smallest=arr[i];
            }
         }
         System.out.println("smallest element in array is:"+smallest);
         //System.out.println("largest element in array is:"+largest);
        
        sc.close();
        }
}
