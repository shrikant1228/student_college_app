import java.util.Scanner;
public class Stringexample{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter a string:");
        String str=sc.nextLine();
        System.out.println("length :"+str.length());
        System.out.println("uppercase :"+str.toUpperCase());   
        System.out.println("reversed :"+new StringBuilder(str).reverse());
        sc.close();
    }
}