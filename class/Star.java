import java.util.Scanner;
public class Star{
    static void printstar(int height){
        for(int i=1;i<=height;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        
    }

public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    int height;
    System.out.println("eneter the height:");
    height=sc.nextInt();
    printstar(height);
    sc.close();


}
}