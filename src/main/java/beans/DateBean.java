package beans;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateBean implements Serializable {
    public String getCurrentTime() {
        return new SimpleDateFormat("HH:mm:ss z").format(new Date());
    }
    public String getCurrentDate() {
        return new SimpleDateFormat("dd.MM.yyyy").format(new Date());
    }
}