import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 공부한 예제 개발에 적용 해보기 1
 */
public class StreamOptionalStudy_V1 {

    // As - Is
        private String asisTstCode() {
            List<Map<String,String>> list = new ArrayList<>();

            String rtnFlg = "Y";
            if(!list.isEmpty()) {
                for(Map<String,String> gsPayAprvMean : list) {
                    if("BOACJ6".equals(gsPayAprvMean.get("cardPdNum")) || "BOACPZ".equals(gsPayAprvMean.get("cardPdNum")))  {
                        rtnFlg = "N";
                        break;
                    }
                }
            }
            return rtnFlg;
        }

    // To - Be
    private String asisTobeCode() {
        List<Map<String,String>> list = new ArrayList<>();

        long gsPayPrimeCardCnt = list.stream()
                .filter(m -> m.containsValue("BOACJ6") || m.containsValue("BOACPZ"))
                .collect(Collectors.counting());
        return gsPayPrimeCardCnt > 0 ? "Y" : "N";
    }
}
