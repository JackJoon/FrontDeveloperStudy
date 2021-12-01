import java.util.*;
import java.util.stream.Collectors;

/**
 * 공부한 예제 개발에 적용 해보기 2
 */
public class StreamOptionalStudy_V2 {

    // As - Is
    private String asisTstCode() {
        String diffMonthStr = "Y";

        if(!StringUtils.isEmpty(ordSht.getGsOrdCust().getGspayMemNo())) {
            if (!StringUtils.isEmpty(ordSht.getGsOrdCust().getRlnmCertDtm())) {
                String rlnmCertDtm = StringUtils.substring(ordSht.getGsOrdCust().getRlnmCertDtm(), 0, 8);
                int diffMonth = DateUtils.dateDiff(DateUtils.toDate(rlnmCertDtm), DateUtils.toDate(DateUtils.getToday())) / 30;

                diffMonthStr = diffMonth >= 6 ? "Y" : "N";
            }
        }
        return diffMonthStr;
    }

    // To - Be
    private String asisTobeCode() {
        String diffMonthStr = Optional.ofNullable(ordSht.getGsOrdCust())
                .filter(s -> Objects.isNull(s.getGspayMemNo()))
                .map(d -> chkBeforeAfterDtm(d.getRlnmCertDtm()))
                .orElse("Y");
    }

    public String chkBeforeAfterDtm(String certDtm) {
        String diffMonthStr = "Y";

        if (!StringUtils.isEmpty(certDtm)) {
            String rlnmCertDtm = StringUtils.substring(certDtm, 0, 8);
            int diffMonth = DateUtils.dateDiff(DateUtils.toDate(rlnmCertDtm), DateUtils.toDate(DateUtils.getToday())) / 30;

            diffMonthStr = diffMonth >= 6 ? "Y" : "N";
        }
           return diffMonthStr;
    }
}
