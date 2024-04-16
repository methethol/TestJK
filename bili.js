package com.github.catvod.spider;

import android.content.Context;
import android.text.TextUtils;
import com.github.catvod.crawler.Spider;
import com.github.catvod.crawler.SpiderDebug;
import com.github.catvod.spider.merge.tlV;
import com.github.catvod.spider.merge.;
import com.github.catvod.spider.merge.;
import com.github.catvod.spider.merge.;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import okhttp3.Call;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Bili extends Spider {
  protected static String  = "https://www.bilibili.com";
  
  protected static String  = "www.bilibili.com";
  
  public static String  = "";
  
  protected JSONObject  = null;
  
  public static String getCookie() {
    if (.isEmpty()) {
      .  = new .() {
          protected void onFailure(Call param1Call, Exception param1Exception) {}
          
          protected void onResponse(Response param1Response) {}
        };
      if (.length() > 10) {
         = ;
      } else {
        .(.(), , null, (), ());
        List list = (List)..get();
         = TextUtils.join(tlV.d("7A"), list);
      } 
    } 
    return ;
  }
  
  protected static HashMap<String, String> () {
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    hashMap.put(tlV.d("1427353A7F2726313E3C"), tlV.d("0C3B2A213E0A207B6566624669033926360936277006064670647E786946163D3E7E665D612C667C7B4600242024373124361B212649746767666150617C1B00062B0D7870243B0D2474172D310D2E7D700B3A142E3935676B536F647E7C6455797A657C72352032313A3B49746767666150"));
    String str = ;
    hashMap.put(tlV.d("1331362D200333"), str);
    str = getCookie();
    hashMap.put(tlV.d("023B3F233B03"), str);
    return (HashMap)hashMap;
  }
  
  protected static HashMap<String, String> () {
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    hashMap.put(tlV.d("1427353A7F2726313E3C"), tlV.d("0C3B2A213E0A207B6566624669033926360936277006064670647E786946163D3E7E665D612C667C7B4600242024373124361B212649746767666150617C1B00062B0D7870243B0D2474172D310D2E7D700B3A142E3935676B536F647E7C6455797A657C72352032313A3B49746767666150"));
    return (HashMap)hashMap;
  }
  
  public String categoryContent(String paramString1, String paramString2, boolean paramBoolean, HashMap<String, String> paramHashMap) {
    String str = tlV.d("353D34");
    try {
      String str2;
      String str3 = tlV.d("29202438215C6E7B31383B48233D3C21300F2D3D7E2B3D0B6E2C7F3F37046C3D3E3C37142735332D7D152435222B3A49352D202D6D152435222B3A39352D202D6F1028303527740D242D272720027C");
      if (paramHashMap != null && paramHashMap.size() > 0 && paramHashMap.containsKey(str) && ((String)paramHashMap.get(str)).length() > 0) {
        StringBuilder stringBuilder1 = new StringBuilder();
        this();
        stringBuilder1.append(str3);
        stringBuilder1.append(paramHashMap.get(str));
        str2 = stringBuilder1.toString();
      } else {
        StringBuilder stringBuilder1 = new StringBuilder();
        this();
        stringBuilder1.append(str3);
        stringBuilder1.append(str2);
        str2 = stringBuilder1.toString();
      } 
      str3 = str2;
      if (paramHashMap != null) {
        str3 = str2;
        if (paramHashMap.size() > 0) {
          Iterator<String> iterator = paramHashMap.keySet().iterator();
          while (true) {
            str3 = str2;
            if (iterator.hasNext()) {
              str3 = iterator.next();
              String str4 = paramHashMap.get(str3);
              if (str4.length() > 0) {
                StringBuilder stringBuilder1 = new StringBuilder();
                this();
                stringBuilder1.append(str2);
                stringBuilder1.append(tlV.d("67"));
                stringBuilder1.append(str3);
                stringBuilder1.append(tlV.d("7C"));
                stringBuilder1.append(URLEncoder.encode(str4));
                str2 = stringBuilder1.toString();
              } 
              continue;
            } 
            break;
          } 
        } 
      } 
      StringBuilder stringBuilder = new StringBuilder();
      this();
      stringBuilder.append(str3);
      stringBuilder.append(tlV.d("6724312F375B"));
      stringBuilder.append(paramString2);
      str3 = stringBuilder.toString();
      String str1 = .(str3, ());
      JSONObject jSONObject2 = new JSONObject();
      this(str1);
      if (jSONObject2.getInt(tlV.d("223B342D")) != 0) {
         = "";
        str1 = .(str3, ());
      } 
      jSONObject2 = new JSONObject();
      this(str1);
      JSONObject jSONObject1 = jSONObject2.getJSONObject(tlV.d("25352429"));
      JSONArray jSONArray1 = new JSONArray();
      this();
      JSONArray jSONArray2 = jSONObject1.getJSONArray(tlV.d("3331233D3E12"));
      int i;
      for (i = 0; i < jSONArray2.length(); i++) {
        JSONObject jSONObject4 = jSONArray2.getJSONObject(i);
        JSONObject jSONObject3 = new JSONObject();
        this();
        String str5 = jSONObject4.getString(tlV.d("313D33"));
        String str4 = str5;
        if (str5.startsWith(tlV.d("6E7B"))) {
          StringBuilder stringBuilder2 = new StringBuilder();
          this();
          stringBuilder2.append(tlV.d("29202438215C"));
          stringBuilder2.append(str5);
          str4 = stringBuilder2.toString();
        } 
        jSONObject3.put(tlV.d("373B34173B02"), jSONObject4.optString(tlV.d("203D34")));
        str5 = .(jSONObject4.getString(tlV.d("353D242437"))).();
        jSONObject3.put(tlV.d("373B34173C072C31"), str5);
        jSONObject3.put(tlV.d("373B3417220F22"), str4);
        str4 = jSONObject4.getString(tlV.d("25212229260F2E3A")).split(tlV.d("7B"))[0];
        StringBuilder stringBuilder1 = new StringBuilder();
        this();
        stringBuilder1.append(str4);
        stringBuilder1.append(tlV.d("A4DCD6A1C0F9"));
        str4 = stringBuilder1.toString();
        jSONObject3.put(tlV.d("373B341720032C35222321"), str4);
        jSONArray1.put(jSONObject3);
      } 
      jSONObject1 = new JSONObject();
      this();
      int j = Integer.parseInt(paramString2);
      jSONObject1.put(tlV.d("3135372D"), j);
      i = j;
      if (jSONArray1.length() == 20)
        i = j + 1; 
      jSONObject1.put(tlV.d("3135372D3109343A24"), i);
      jSONObject1.put(tlV.d("2D3D3D2126"), 20);
      jSONObject1.put(tlV.d("353B24293E"), 2147483647);
      jSONObject1.put(tlV.d("2D3D233C"), jSONArray1);
      return jSONObject1.toString();
    } catch (Exception exception) {
      exception.printStackTrace();
      return null;
    } 
  }
  
  public String detailContent(List<String> paramList) {
    String str1 = tlV.d("1E");
    String str2 = tlV.d("65");
    byte b = 0;
    try {
      String str6 = paramList.get(0);
      StringBuilder stringBuilder1 = new StringBuilder();
      this();
      stringBuilder1.append(str6);
      stringBuilder1.append("");
      String str3 = stringBuilder1.toString();
      StringBuilder stringBuilder2 = new StringBuilder();
      this();
      stringBuilder2.append(tlV.d("29202438215C6E7B31383B48233D3C21300F2D3D7E2B3D0B6E2C7F3F37046C3D3E3C37142735332D7D1028312777330F2569"));
      stringBuilder2.append(str3);
      String str4 = stringBuilder2.toString();
      JSONObject jSONObject1 = new JSONObject();
      this(.(str4, ()));
      JSONObject jSONObject2 = jSONObject1.getJSONObject(tlV.d("25352429"));
      jSONObject1 = new JSONObject();
      this();
      jSONObject1.put(tlV.d("373B34173B02"), str6);
      str6 = jSONObject2.getString(tlV.d("353D242437"));
      jSONObject1.put(tlV.d("373B34173C072C31"), str6);
      str6 = jSONObject2.getString(tlV.d("313D33"));
      jSONObject1.put(tlV.d("373B3417220F22"), str6);
      str6 = jSONObject2.getString(tlV.d("353A312537"));
      jSONObject1.put(tlV.d("352D202D0D08203935"), str6);
      jSONObject1.put(tlV.d("373B34172B032026"), "");
      jSONObject1.put(tlV.d("373B341733142435"), "");
      StringBuilder stringBuilder3 = new StringBuilder();
      this();
      stringBuilder3.append(jSONObject2.getLong(tlV.d("25212229260F2E3A")) / 60L);
      stringBuilder3.append(tlV.d("A4DCD6A1C0F9"));
      String str5 = stringBuilder3.toString();
      jSONObject1.put(tlV.d("373B341720032C35222321"), str5);
      jSONObject1.put(tlV.d("373B34173305353B22"), "");
      jSONObject1.put(tlV.d("373B3417360F3331333C3D14"), "");
      str5 = jSONObject2.getString(tlV.d("2531232B"));
      jSONObject1.put(tlV.d("373B341731092F20352626"), str5);
      jSONObject1.put(tlV.d("373B3417220A202D0F2E20092C"), tlV.d("03B3FBD1"));
      ArrayList<String> arrayList = new ArrayList();
      this();
      JSONArray jSONArray = jSONObject2.getJSONArray(tlV.d("3135372D21"));
      while (true) {
        int i = jSONArray.length();
        String str = tlV.d("62");
        if (b < i) {
          JSONObject jSONObject3 = jSONArray.getJSONObject(b);
          str = jSONObject3.getString(tlV.d("3135223C")).replace(str2, str1).replace(str, str1);
          StringBuilder stringBuilder = new StringBuilder();
          this();
          stringBuilder.append(str);
          stringBuilder.append(str2);
          stringBuilder.append(str3);
          stringBuilder.append(tlV.d("6A74"));
          stringBuilder.append(jSONObject3.getLong(tlV.d("223D34")));
          arrayList.add(stringBuilder.toString());
          b++;
          continue;
        } 
        jSONObject1.put(tlV.d("373B3417220A202D0F3D200A"), TextUtils.join(str, arrayList));
        JSONArray jSONArray1 = new JSONArray();
        this();
        jSONArray1.put(jSONObject1);
        JSONObject jSONObject = new JSONObject();
        this();
        jSONObject.put(tlV.d("2D3D233C"), jSONArray1);
        return jSONObject.toString();
      } 
    } catch (Exception exception) {
      exception.printStackTrace();
      return null;
    } 
  }
  
  public String homeContent(boolean paramBoolean) {
    JSONObject jSONObject = new JSONObject();
    try {
      jSONObject.put(tlV.d("2238313B21"), this..getJSONArray(tlV.d("2238313B210332")));
      if (paramBoolean)
        jSONObject.put(tlV.d("273D3C3C371432"), this..getJSONObject(tlV.d("273D3C3C3714"))); 
    } catch (JSONException jSONException) {
      SpiderDebug.log((Throwable)jSONException);
    } 
    return jSONObject.toString();
  }
  
  public String homeVideoContent() {
    String str1;
    String str2 = "";
    try {
      JSONArray jSONArray = new JSONArray();
      this();
      try {
        String str4 = tlV.d("29202438215C6E7B31383B48233D3C21300F2D3D7E2B3D0B6E2C7F3F37046C3D3E3C37142735332D7D152435222B3A49352D202D6D152435222B3A39352D202D6F1028303527740D242D272720027CB3FADF7281D8E9B5D1F88FDEE7");
        String str3 = .(str4, ());
        JSONObject jSONObject1 = new JSONObject();
        this(str3);
        if (jSONObject1.getInt(tlV.d("223B342D")) != 0) {
           = "";
          str3 = .(str4, ());
        } 
        jSONObject1 = new JSONObject();
        this(str3);
        JSONArray jSONArray1 = jSONObject1.getJSONObject(tlV.d("25352429")).getJSONArray(tlV.d("3331233D3E12"));
        for (byte b = 0; b < jSONArray1.length(); b++) {
          String str6;
          JSONObject jSONObject3 = jSONArray1.getJSONObject(b);
          JSONObject jSONObject2 = new JSONObject();
          this();
          String str7 = jSONObject3.getString(tlV.d("313D33"));
          str3 = str7;
          if (str7.startsWith(tlV.d("6E7B"))) {
            StringBuilder stringBuilder1 = new StringBuilder();
            this();
            stringBuilder1.append(tlV.d("29202438215C"));
            stringBuilder1.append(str7);
            str6 = stringBuilder1.toString();
          } 
          jSONObject2.put(tlV.d("373B34173B02"), jSONObject3.getString(tlV.d("203D34")));
          str7 = .(jSONObject3.getString(tlV.d("353D242437"))).();
          jSONObject2.put(tlV.d("373B34173C072C31"), str7);
          jSONObject2.put(tlV.d("373B3417220F22"), str6);
          str7 = jSONObject3.getString(tlV.d("25212229260F2E3A")).split(tlV.d("7B"))[0];
          StringBuilder stringBuilder = new StringBuilder();
          this();
          stringBuilder.append(str7);
          stringBuilder.append(tlV.d("A4DCD6A1C0F9"));
          String str5 = stringBuilder.toString();
          jSONObject2.put(tlV.d("373B341720032C35222321"), str5);
          jSONArray.put(jSONObject2);
        } 
      } catch (Exception exception) {}
      JSONObject jSONObject = new JSONObject();
      this();
      jSONObject.put(tlV.d("2D3D233C"), jSONArray);
    } finally {
      Exception exception = null;
    } 
    return str1;
  }
  
  public void init(Context paramContext, String paramString) {
    String str2 = tlV.d("2238312668496E");
    String str4 = tlV.d("223B3F233B03");
    String str3 = tlV.d("29202438");
    super.init(paramContext, paramString);
    String str1 = paramString;
    try {
      if (paramString.startsWith(str3))
        str1 = .(paramString, ()); 
      JSONObject jSONObject = new JSONObject();
      this(str1);
      this. = jSONObject;
      if (jSONObject.has(str4)) {
        str1 = this..getString(str4);
         = str1;
        boolean bool = str1.startsWith(str3);
        str1 = tlV.d("4B");
        if (bool) {
           = .(, ()).replace(str1, "");
        } else if (.startsWith(str2)) {
           = .(.replace(str2, Proxy.localProxyUrl().replace(tlV.d("6E2422272A1F"), tlV.d("6E3239243749"))), ()).replace(str1, "");
        } 
      } 
    } catch (JSONException jSONException) {
      jSONException.printStackTrace();
    } 
  }
  
  public String playerContent(String paramString1, String paramString2, List<String> paramList) {
    paramString1 = tlV.d("34263C");
    try {
      String[] arrayOfString = paramString2.split(tlV.d("1D7F"));
      paramString2 = arrayOfString[0];
      String str = arrayOfString[1];
      StringBuilder stringBuilder = new StringBuilder();
      this();
      stringBuilder.append(tlV.d("29202438215C6E7B31383B48233D3C21300F2D3D7E2B3D0B6E2C7F383E0738312267220A202D253A3E592022392C6F"));
      stringBuilder.append(paramString2);
      stringBuilder.append(tlV.d("6737392C6F46"));
      stringBuilder.append(str);
      stringBuilder.append(tlV.d("67253E7563547172362727142A6961"));
      str = stringBuilder.toString();
      JSONObject jSONObject1 = new JSONObject();
      this(.(str, ()));
      str = jSONObject1.getJSONObject(tlV.d("25352429")).getJSONArray(tlV.d("25212224")).getJSONObject(0).getString(paramString1);
      jSONObject1 = new JSONObject();
      this();
      jSONObject1.put(tlV.d("1427353A7F2726313E3C"), tlV.d("0C3B2A213E0A207B6566624669033926360936277006064670647E786946163D3E7E665D612C667C7B4600242024373124361B212649746767666150617C1B00062B0D7870243B0D2474172D310D2E7D700B3A142E3935676B536F647E7C6455797A657C72352032313A3B49746767666150"));
      jSONObject1.put(tlV.d("1331362D200333"), tlV.d("29202438215C6E7B273F2548233D3C21300F2D3D7E2B3D0B"));
      JSONObject jSONObject2 = new JSONObject();
      this();
      jSONObject2.put(tlV.d("3135223B37"), tlV.d("71"));
      jSONObject2.put(tlV.d("3138313107142D"), "");
      jSONObject2.put(paramString1, str);
      jSONObject2.put(tlV.d("2931312C3714"), jSONObject1.toString());
      return jSONObject2.toString();
    } catch (Exception exception) {
      exception.printStackTrace();
      return null;
    } 
  }
  
  public String searchContent(String paramString, boolean paramBoolean) {
    try {
      JSONObject jSONObject3 = new JSONObject();
      this();
      StringBuilder stringBuilder = new StringBuilder();
      this();
      stringBuilder.append(tlV.d("29202438215C6E7B31383B48233D3C21300F2D3D7E2B3D0B6E2C7F3F37046C3D3E3C37142735332D7D152435222B3A49352D202D6D152435222B3A39352D202D6F1028303527740D242D272720027C"));
      stringBuilder.append(URLEncoder.encode(paramString));
      paramString = .(stringBuilder.toString(), ());
      JSONObject jSONObject2 = new JSONObject();
      this(paramString);
      JSONObject jSONObject1 = jSONObject2.getJSONObject(tlV.d("25352429"));
      JSONArray jSONArray1 = new JSONArray();
      this();
      JSONArray jSONArray2 = jSONObject1.getJSONArray(tlV.d("3331233D3E12"));
      for (byte b = 0; b < jSONArray2.length(); b++) {
        JSONObject jSONObject5 = jSONArray2.getJSONObject(b);
        JSONObject jSONObject4 = new JSONObject();
        this();
        String str3 = jSONObject5.getString(tlV.d("313D33"));
        String str2 = str3;
        if (str3.startsWith(tlV.d("6E7B"))) {
          StringBuilder stringBuilder2 = new StringBuilder();
          this();
          stringBuilder2.append(tlV.d("29202438215C"));
          stringBuilder2.append(str3);
          str2 = stringBuilder2.toString();
        } 
        jSONObject4.put(tlV.d("373B34173B02"), jSONObject5.optString(tlV.d("203D34")));
        str3 = .(jSONObject5.getString(tlV.d("353D242437"))).();
        jSONObject4.put(tlV.d("373B34173C072C31"), str3);
        jSONObject4.put(tlV.d("373B3417220F22"), str2);
        str3 = jSONObject5.getString(tlV.d("25212229260F2E3A")).split(tlV.d("7B"))[0];
        StringBuilder stringBuilder1 = new StringBuilder();
        this();
        stringBuilder1.append(str3);
        stringBuilder1.append(tlV.d("A4DCD6A1C0F9"));
        String str1 = stringBuilder1.toString();
        jSONObject4.put(tlV.d("373B341720032C35222321"), str1);
        jSONArray1.put(jSONObject4);
      } 
      jSONObject3.put(tlV.d("2D3D233C"), jSONArray1);
      return jSONObject3.toString();
    } catch (Exception exception) {
      SpiderDebug.log(exception);
      return "";
    } 
  }
}
