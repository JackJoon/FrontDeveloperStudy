import java.util.ArrayList;
import java.util.List;

/**
 * Optional은 return 타입에서만 사용 하는 게 권장 사항
 */
public class OptionalStudy {
    public static void main(String[] args) {
        List<OnlinClass> onlinClasses = new ArrayList<>();
        onlinClasses.add(new OnlinClass(1,"spring boot", true));
        onlinClasses.add(new OnlinClass(2,"spring data jpa", true));
        onlinClasses.add(new OnlinClass(3,"spring mvc", false));
        onlinClasses.add(new OnlinClass(4,"spring core", false));
        onlinClasses.add(new OnlinClass(5,"rest api development", false));

        OnlinClass spring_boot = new OnlinClass(1,"spring boot", true);

        System.out.println("========================================================================================");

        System.out.println("============================= Optional API ===========================================");

    }
}
