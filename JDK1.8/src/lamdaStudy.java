import java.util.Arrays;
import java.util.Comparator;
import java.util.function.*;

/**
 * 람다 표현 식 및 메서드 래퍼런스
 *
 *
 */
public class lamdaStudy {

    public static void main(String[] args) {
        // 람다 표현식
        /*int baseNumnber = 10;
        Supplier<Integer> get10 = () -> 10;             //함수 인자가 없을 때
        UnaryOperator<Integer> get20 = (i) -> 10;       // 함수 인자가 하나 있을 때
        BinaryOperator<Integer> get30 = (a,b) -> a+b;   // 함수 인자가 2개일 때 

        //쉐도잉

        //로컬 클래스
        class LocalClass {
            void  printBaseNumber() {
                int baseNumber = 11;
                System.out.println(baseNumnber);    //11
            }
        }

        //익명 클래스
        Consumer<Integer> integerConsumer = new Consumer<Integer>() {
            @Override
            public void accept(Integer baseNumnber) {
                System.out.println(baseNumnber);                //10
            }
        };


        // 람다
        IntConsumer printInf = (i) -> {
            System.out.println(i  + baseNumnber);
        };

        printInf.accept(10);*/

        //메서드 래퍼런스
        Greeting greeting = new Greeting();

        UnaryOperator<String> hi = Greeting::hi;    //::클론이 두번 호출 하면 스태틱 메서드
        System.out.println("hi : " +hi.apply("juntTaek"));

        UnaryOperator<String> his = greeting::hello;    //생성자를 통해 접근 하면 인스턴스 메서드
        System.out.println("his : " +his);


        // 생성자 호출 하면 접근
        Supplier<Greeting> newGretting = Greeting::new;
        Greeting greeting1 = newGretting.get();

        //입력값 받는 생성자 호출
        Function<String,Greeting> grettingssss = Greeting::new;
        Greeting greeting2 = grettingssss.apply("juntaek");
        System.out.println(greeting2.getName());

        Supplier<Greeting> newsGretting  = Greeting::new;

        //임의의 객체 호출
        String[] names = {"leejt", "a1art", "white"};
        Arrays.sort(names, String::compareToIgnoreCase);
        System.out.println(Arrays.toString(names));


    }
}

