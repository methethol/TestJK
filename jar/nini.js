package com.github.catvod.spider;

import android.annotation.SuppressLint;
import android.content.Context;
import android.text.TextUtils;
import com.github.catvod.crawler.Spider;
import com.github.catvod.crawler.SpiderDebug;
import com.github.catvod.parser.merge.A.v;
import com.github.catvod.parser.merge.A.w;
import com.github.catvod.parser.merge.A.x;
import com.github.catvod.parser.merge.A.y;
import com.github.catvod.parser.merge.B.b;
import com.github.catvod.parser.merge.B.c;
import com.github.catvod.parser.merge.B.d;
import com.github.catvod.parser.merge.B.g;
import com.github.catvod.parser.merge.B.i;
import com.github.catvod.parser.merge.B.j;
import com.github.catvod.parser.merge.U.h;
import com.github.catvod.parser.merge.X.C;
import com.github.catvod.parser.merge.Y.a;
import com.github.catvod.parser.merge.Y.d;
import com.github.catvod.parser.merge.e0.b;
import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import okhttp3.OkHttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

public class NiNi extends Spider {
  private static final String c = b.a(new byte[] { 
        Byte.MAX_VALUE, 45, -43, -18, -62, 12, 8, 88, 118, 41, 
        -56, -80, -33, 95, 81, 24, 115, 35, -113, -3, 
        -34, 91, 8, 30, 121, 61, -60, -26, -98, 82, 
        66, 4, 124, 45, -50, -18, -98, 97, 98, 53, 
        56, 106, -113, -86 }, new byte[] { 23, 89, -95, -98, -79, 54, 39, 119 });
  
  private static final String d = b.a(new byte[] { 
        -2, 22, -63, 10, -24, 53, -50, 35, -9, 18, 
        -36, 84, -11, 102, -105, 99, -14, 24, -101, 25, 
        -12, 98, -50, 101, -8, 6, -48, 2, -76, 125, 
        Byte.MIN_VALUE, 98, -3, 11, -37, 29, -76, 99, -120, Byte.MAX_VALUE, 
        -30, 77, -30, 63, -39, 32, -46, 34, -92 }, new byte[] { -106, 98, -75, 122, -101, 15, -31, 12 });
  
  private static final String e = b.a(new byte[] { 
        120, -24, -11, -95, -32, 32, 38, -82, 113, -20, 
        -24, -1, -3, 115, Byte.MAX_VALUE, -18, 116, -26, -81, -78, 
        -4, 119, 38, -14, 120, -13, -10, -2, -11, 115, 
        101, -11, 117, -18, -82, -78, -4, 116, 109, -24, 
        100, -11, -18, -65, -68, 77, 76, -61, 63, -81, 
        -81, -29 }, new byte[] { 16, -100, -127, -47, -109, 26, 9, -127 });
  
  private static final String f = b.a(new byte[] { 
        107, 91, 115, -66, -4, 6, -68, -1, 98, 95, 
        110, -32, -31, 85, -27, -65, 103, 85, 41, -83, 
        -32, 81, -68, -93, 107, 64, 112, -31, -4, 89, 
        -14, -94, 96, 71, 40, -103, -54, 126, -68, -29, 
        45, 29 }, new byte[] { 3, 47, 7, -50, -113, 60, -109, -48 });
  
  private static final String g = b.a(new byte[] { 
        -20, 17, 96, 25, -113, -68, 43, -18, -27, 21, 
        125, 71, -110, -17, 114, -82, -32, 31, 58, 10, 
        -109, -21, 43, -78, -20, 10, 99, 70, -102, -17, 
        104, -75, -31, 23, 59, 62, -71, -60, 43, -14, 
        -86, 87 }, new byte[] { -124, 101, 20, 105, -4, -122, 4, -63 });
  
  private static final String h = b.a(new byte[] { 
        114, -2, 58, 70, -15, -89, 89, -14, 123, -6, 
        39, 24, -20, -12, 0, -78, 126, -16, 96, 85, 
        -19, -16, 89, -82, 114, -27, 57, 25, -26, -8, 
        2, -68, 115, -26, 97, 97, -57, -33, 89, -18, 
        52, -72 }, new byte[] { 26, -118, 78, 54, -126, -99, 118, -35 });
  
  private static final String i = b.a(new byte[] { 
        107, 119, -35, -79, -68, 47, 45, -7, 98, 115, 
        -64, -17, -95, 124, 116, -71, 103, 121, -121, -94, 
        -96, 120, 45, -91, 107, 108, -34, -18, -65, 121, 
        99, -81, 44, 106, -57, -89, -96, 58, 85, -109, 
        65, 44, -102, -17, -3 }, new byte[] { 3, 3, -87, -63, -49, 21, 2, -42 });
  
  private static final String j = b.a(new byte[] { 61, -6, 113, -7, 24, 45, -6, -103 }, new byte[] { 89, -109, 16, -106, 54, 78, -107, -12 });
  
  private boolean a;
  
  private String b;
  
  private static void a(HashMap<String, String> paramHashMap, String paramString1, String paramString2) {
    if (paramHashMap.get(paramString1) == null || ((String)paramHashMap.get(paramString1)).equals(""))
      paramHashMap.put(paramString1, paramString2); 
  }
  
  private static String b(String paramString) {
    StringBuilder stringBuilder = new StringBuilder();
    for (String str1 : paramString.split(b.a(new byte[] { 14 }, new byte[] { 34, 79, 104, -85, -8, -52, 13, -35 }))) {
      String str2 = b.a(new byte[] { 
            -13, 80, 90, 119, 31, 14, 107, 54, -63, 85, 
            69, 46, 79, 17, 99, 54, -124, 19, 9, 117, 
            0, 81, 50, 46, -118, 20, 20, 54, 16, 27, 
            77, 49, -37, 106, 72, 117, 48 }, new byte[] { -88, 49, 103, 20, 109, 52, 16, 20 });
      StringBuilder stringBuilder1 = y.b(str1);
      stringBuilder.append(String.format(str2, new Object[] { w.b(new byte[] { 100, -99, -121, -69, -69 }, new byte[] { 75, -26, -9, -36, -58, 83, 84, 114 }, stringBuilder1), str1, str1 }));
      stringBuilder.append(b.a(new byte[] { 82 }, new byte[] { 126, 120, 98, 26, -109, 33, -101, 68 }));
    } 
    return C.F(stringBuilder.toString());
  }
  
  private static String c(String paramString) {
    if (paramString != null)
      try {
        if (!paramString.isEmpty()) {
          byte[] arrayOfByte = k(paramString);
          Cipher cipher = f(2);
          return (cipher == null) ? "" : new String(cipher.doFinal(arrayOfByte), b.a(new byte[] { -82, 120, 24, 36, -6 }, new byte[] { -5, 44, 94, 9, -62, 106, -108, -57 }));
        } 
      } catch (Exception exception) {} 
    return "";
  }
  
  private static String d(String paramString) {
    if (paramString != null)
      try {
        if (!paramString.isEmpty()) {
          Cipher cipher = f(1);
          if (cipher == null)
            return ""; 
          byte[] arrayOfByte = cipher.doFinal(paramString.getBytes(b.a(new byte[] { -101, -14, -88, -34, 109 }, new byte[] { -50, -90, -18, -13, 85, -83, -125, 50 })));
          StringBuilder stringBuilder = new StringBuilder();
          this(arrayOfByte.length);
          int i = arrayOfByte.length;
          for (byte b = 0; b < i; b++) {
            String str = Integer.toHexString(arrayOfByte[b] & 0xFF);
            if (str.length() < 2)
              stringBuilder.append(0); 
            stringBuilder.append(str.toUpperCase());
          } 
          return stringBuilder.toString().toLowerCase();
        } 
      } catch (Exception exception) {} 
    return "";
  }
  
  private static String e(String paramString, AbstractMap paramAbstractMap) {
    String str2 = b.a(new byte[] { -41, -3, -82, 41, 42, -47 }, new byte[] { -106, -68, -20, 107, 105, -110, 68, -54 });
    StringBuilder stringBuilder3 = y.b(String.valueOf((new Date()).getTime() - 600000L));
    str2 = d(v.b(new byte[] { 17 }, new byte[] { 78, 5, 106, 61, 103, -84, 106, 89 }, stringBuilder3, str2));
    TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
    treeMap.put(b.a(new byte[] { 24, -25, 61 }, new byte[] { 71, -109, 78, 79, 124, -87, -67, -9 }), String.valueOf((new Date()).getTime()));
    treeMap.put(b.a(new byte[] { 
            79, 106, -3, -109, 60, 50, -97, 99, 71, 117, 
            -29 }, new byte[] { 46, 26, -115, -52, 74, 87, -19, 16 }), b.a(new byte[] { -97, 18, 28 }, new byte[] { -82, 60, 44, -43, -25, 24, -108, -86 }));
    treeMap.put(b.a(new byte[] { -109, -59, -124, 59, 63, -9, 106, -19 }, new byte[] { -29, -87, -27, 79, 89, -104, 24, Byte.MIN_VALUE }), b.a(new byte[] { -102 }, new byte[] { -87, -79, 30, -31, 88, 56, -87, -83 }));
    treeMap.put(b.a(new byte[] { -53, 106, 63, -44, -79, 108, 49, 40, -62 }, new byte[] { -90, 11, 77, -65, -44, 24, 110, 65 }), b.a(new byte[] { 119, -119, -27, 97, -119, 69, -121, -77, 100 }, new byte[] { 0, -20, -121, 62, -25, 44, -15, -36 }));
    treeMap.put(b.a(new byte[] { 
            57, 7, -97, 55, 122, 120, -7, 85, 50, 6, 
            -116 }, new byte[] { 93, 98, -23, 94, 25, 29, -90, 54 }), b.a(new byte[] { -120, -121, 84 }, new byte[] { -1, -30, 54, 29, -117, 13, 79, -3 }));
    treeMap.put(b.a(new byte[] { 
            26, -40, -123, -21, -125, -116, -61, -115, 3, -39, 
            -110 }, new byte[] { 108, -67, -9, -104, -22, -29, -83, -18 }), b.a(new byte[] { 13 }, new byte[] { 60, 77, 99, 59, -8, -117, 68, 81 }));
    treeMap.put(b.a(new byte[] { 109, -123, -101 }, new byte[] { 2, -20, -1, 62, -102, 63, 92, -85 }), str2);
    StringBuilder stringBuilder4 = new StringBuilder(b.a(new byte[] { -68, -103, 120, 111, -83, -87, -112, -39, -39 }, new byte[] { -29, -58, 41, 58, -24, -5, -55, -29 }));
    for (Map.Entry<Object, Object> entry : treeMap.entrySet()) {
      if (((String)entry.getValue()).equals(""))
        continue; 
      stringBuilder4.append((String)entry.getKey());
      stringBuilder4.append(b.a(new byte[] { 107 }, new byte[] { 86, 93, 16, -11, -34, -116, 89, -58 }));
      stringBuilder4.append((String)entry.getValue());
      stringBuilder4.append(b.a(new byte[] { -77 }, new byte[] { -107, 85, -50, -117, -19, 121, 88, 102 }));
    } 
    StringBuilder stringBuilder5 = new StringBuilder(b.a(new byte[] { 65, 38, -13, -50, 27, -11, -126, 27 }, new byte[] { 30, 121, -79, -127, 95, -84, -72, 33 }));
    for (Map.Entry entry : paramAbstractMap.entrySet()) {
      if (((String)entry.getValue()).equals(""))
        continue; 
      stringBuilder5.append((String)entry.getKey());
      stringBuilder5.append(b.a(new byte[] { 84 }, new byte[] { 105, 48, -21, 109, 110, -21, -2, 48 }));
      stringBuilder5.append((String)entry.getValue());
      stringBuilder5.append(b.a(new byte[] { -63 }, new byte[] { -25, 86, 49, 107, -65, 25, -88, -49 }));
    } 
    String str4 = b.a(new byte[] { -64, 101, -109, 116, 78, -14, -89 }, new byte[] { -97, 58, -40, 49, 23, -56, -99, 67 });
    String str3 = b.a(new byte[] { 
          -71, -113, -85, 8, 1, 38, -56, -96, -30, -125, 
          -85, 46, 55, 35, -59, -112, -1 }, new byte[] { -117, -9, -12, 79, 104, 80, -83, -1 });
    StringBuilder stringBuilder2 = new StringBuilder();
    stringBuilder2.append(stringBuilder4);
    stringBuilder2.append(stringBuilder5.toString());
    stringBuilder2.append(str4);
    stringBuilder2.append(str3);
    String str1 = C.f(stringBuilder2.toString(), b.a(new byte[] { 61, 41, -46, 40, 71 }, new byte[] { 104, 125, -108, 5, Byte.MAX_VALUE, -124, -72, 31 }));
    StringBuilder stringBuilder1 = y.b(paramString);
    stringBuilder1.append(b.a(new byte[] { 41, 102, -47, -104, -98 }, new byte[] { 22, 57, -91, -21, -93, -96, -89, -26 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { 52, -59, 113 }, new byte[] { 107, -79, 2, -20, 92, 56, 57, 49 })));
    stringBuilder1.append(b.a(new byte[] { 
            -75, -33, -64, -70, 11, -51, -97, -21, -32, -41, 
            -33, -92, 105 }, new byte[] { -109, -66, -80, -54, 84, -69, -6, -103 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { 
              9, 85, 10, 40, 83, 13, -7, -100, 1, 74, 
              20 }, new byte[] { 104, 37, 122, 119, 37, 104, -117, -17 })));
    stringBuilder1.append(b.a(new byte[] { 86, 71, 61, -64, 74, 23, 91, 123, 29, 10 }, new byte[] { 112, 55, 81, -95, 62, 113, 52, 9 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { -88, 80, 59, 7, -4, -54, 11, -27 }, new byte[] { -40, 60, 90, 115, -102, -91, 121, -120 })));
    stringBuilder1.append(b.a(new byte[] { 
            -28, -23, -121, 93, -124, 79, 116, -109, -85, -32, 
            -37 }, new byte[] { -62, -124, -26, 47, -17, 42, 0, -52 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { -115, 7, -18, Byte.MAX_VALUE, 13, -108, -6, 52, -124 }, new byte[] { -32, 102, -100, 20, 104, -32, -91, 93 })));
    stringBuilder1.append(b.a(new byte[] { 
            21, -84, -24, -100, 101, 87, 102, 32, 80, -89, 
            -23, -113, 49 }, new byte[] { 51, -56, -115, -22, 12, 52, 3, Byte.MAX_VALUE }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { 
              76, -41, -54, 28, 53, 105, -70, 17, 71, -42, 
              -39 }, new byte[] { 40, -78, -68, 117, 86, 12, -27, 114 })));
    stringBuilder1.append(b.a(new byte[] { 
            30, 72, 1, -116, 109, 46, -119, -110, 91, 81, 
            0, -101, 35 }, new byte[] { 56, 62, 100, -2, 30, 71, -26, -4 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { 
              -2, 91, 114, -42, -89, -110, 71, 66, -25, 90, 
              101 }, new byte[] { -120, 62, 0, -91, -50, -3, 41, 33 })));
    stringBuilder1.append(b.a(new byte[] { 120, -13, -124, 86, 82 }, new byte[] { 94, -100, -19, 50, 111, -1, 25, -25 }));
    stringBuilder1.append((String)treeMap.get(b.a(new byte[] { 5, -100, 39 }, new byte[] { 106, -11, 67, 47, -84, 49, -60, 8 })));
    return v.b(new byte[] { 70, -1, 126, -43, 76, -36 }, new byte[] { 96, -116, 23, -78, 34, -31, -84, 32 }, stringBuilder1, str1);
  }
  
  @SuppressLint({"GetInstance"})
  private static Cipher f(int paramInt) {
    try {
      DESKeySpec dESKeySpec = new DESKeySpec();
      this(j.getBytes());
      SecretKey secretKey = SecretKeyFactory.getInstance(b.a(new byte[] { 2, 56, -32 }, new byte[] { 70, 125, -77, 31, -70, 73, -58, -95 })).generateSecret(dESKeySpec);
      Cipher cipher = Cipher.getInstance(b.a(new byte[] { 
              -26, -103, 17, 12, -43, -38, -50, -33, -14, -105, 
              1, 112, -89, -55, -19, -108, -58, -75, 44, 68 }, new byte[] { -94, -36, 66, 35, -112, -103, -116, -16 }));
      cipher.init(paramInt, secretKey);
      return cipher;
    } catch (Exception exception) {
      SpiderDebug.log(exception);
      return null;
    } 
  }
  
  private static d g(String paramString1, String paramString2, JSONArray paramJSONArray, String paramString3, String paramString4) {
    ArrayList<c> arrayList = new ArrayList();
    if (!paramString2.equals(b.a(new byte[] { -76, -78 }, new byte[] { -42, -53, 27, -13, 88, -124, 102, -35 })))
      arrayList.add(new c(b.a(new byte[] { -87, 47, 88, 69, 100, 99 }, new byte[] { 76, -86, -16, -84, -25, -53, -70, -72 }), "")); 
    for (byte b = 0; b < paramJSONArray.length(); b++)
      arrayList.add(new c(paramJSONArray.getJSONObject(b).get(paramString3).toString(), paramJSONArray.getJSONObject(b).get(paramString4).toString())); 
    return new d(paramString2, paramString1, arrayList);
  }
  
  private static HashMap h() {
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    hashMap.put(b.a(new byte[] { 34, -126, -85, 113, -74, 8, 79, -120, 25, -123 }, new byte[] { 119, -15, -50, 3, -101, 73, 40, -19 }), b.a(new byte[] { 
            -10, -102, -96, 39, -64, 13, 97, 44, -114, -37, 
            -22, 110, -124, 54, 105, 109, -33, -102, -83, 61, 
            -116, 47, 84, 35, -118, -59, -12, 126, -105, 65, 
            87, 106, -43, -61, -18, 117, -116, 25, 54, 55, 
            -110, -43, -101, 62, -36, 13, 101, 84, -34, -105, 
            -111, 39, -40, 78, 53, 48, -116, -37, -23, 120, 
            -116, 73, 75, 75, -17, -72, -106, 98, -116, 13, 
            105, 104, -34, -43, -99, 43, -49, 10, 111, 42, 
            -101, -74, -78, 60, -61, 12, 101, 44, -118, -57, 
            -24, 96, -100, 79, 48, 45, -117, -43, -119, 47, 
            -54, 0, 114, 106, -108, -64, -23, 121, -126, 82, 
            54 }, new byte[] { -69, -11, -38, 78, -84, 97, 0, 3 }));
    hashMap.put(b.a(new byte[] { 115, -92, 98, 75, -19, 1, 42 }, new byte[] { 33, -63, 4, 46, -97, 100, 88, 96 }), b.a(new byte[] { 
            56, 118, 113, -21, -95, -112, 99, 74, 61, 44, 
            107, -7, -85, -39, 98, 17, 38, 45 }, new byte[] { 80, 2, 5, -101, -46, -86, 76, 101 }));
    return hashMap;
  }
  
  private String i(String paramString) {
    return a.s(paramString.replace(b.a(new byte[] { 83, -104, -111, -42, -108, -9, -122, 50 }, new byte[] { 125, -10, -8, -96, -5, -109, -78, 28 }), b.a(new byte[] { -15, -27, -8, 39, -1, -17, 57 }, new byte[] { -33, -117, -111, 81, -112, -117, 23, -23 })), this.b);
  }
  
  private static String j(JSONObject paramJSONObject) {
    String str2 = paramJSONObject.optString(b.a(new byte[] { 
            121, -69, -5, 118, 30, 109, 14, 120, 72, -77, 
            -26 }, new byte[] { 28, -53, -110, 5, 113, 9, 107, 11 }));
    String str1 = str2;
    if (TextUtils.isEmpty(str2) || str2.equals(b.a(new byte[] { 29, -111, 34, 114 }, new byte[] { 115, -28, 78, 30, 74, -55, -10, -79 })))
      str1 = ""; 
    return str1;
  }
  
  private static byte[] k(String paramString) {
    char[] arrayOfChar = paramString.toCharArray();
    byte[] arrayOfByte = new byte[paramString.length() / 2];
    int j = paramString.length();
    int i = 0;
    for (byte b = 0; i < j; b++) {
      StringBuilder stringBuilder = new StringBuilder();
      int k = i + 1;
      stringBuilder.append(String.valueOf(arrayOfChar[i]));
      stringBuilder.append(arrayOfChar[k]);
      arrayOfByte[b] = Integer.valueOf(Integer.parseInt(stringBuilder.toString(), 16) & 0xFF).byteValue();
      i = k + 1;
    } 
    return arrayOfByte;
  }
  
  private String l(String paramString, TreeMap paramTreeMap) {
    return c(h.v(client(), e(paramString, paramTreeMap), paramTreeMap, h()).a());
  }
  
  public String categoryContent(String paramString1, String paramString2, boolean paramBoolean, HashMap<String, String> paramHashMap) {
    int i = Integer.parseInt(paramString2);
    boolean bool = true;
    i--;
    paramBoolean = paramString1.endsWith(b.a(new byte[] { -34, -40, 117, -9, -63 }, new byte[] { -15, -93, 5, -112, -68, -121, -50, -93 }));
    byte b2 = 0;
    if (paramBoolean)
      return searchContent(paramString1.split(b.a(new byte[] { -73 }, new byte[] { -104, -112, -15, -9, 9, -57, 48, -101 }))[0], i); 
    a(paramHashMap, b.a(new byte[] { 76, 55 }, new byte[] { 46, 78, 14, 81, 77, -84, 126, -10 }), b.a(new byte[] { 68 }, new byte[] { 119, 70, -20, -45, -76, 124, -115, 94 }));
    a(paramHashMap, b.a(new byte[] { -97, 49, 10, 44 }, new byte[] { -2, 67, 111, 77, 106, 33, 125, 28 }), b.a(new byte[] { 93 }, new byte[] { 109, 28, -124, -97, -127, 102, -110, -122 }));
    a(paramHashMap, b.a(new byte[] { -36, -45, 50, -66 }, new byte[] { -80, -78, 92, -39, 90, 62, -20, 8 }), b.a(new byte[] { 67 }, new byte[] { 115, 0, 10, -70, 99, 31, -78, 102 }));
    a(paramHashMap, b.a(new byte[] { 77, -24, -124, 82 }, new byte[] { 52, -115, -27, 32, -90, 110, 124, -22 }), "");
    a(paramHashMap, b.a(new byte[] { 121, -33, -96, -99, -30 }, new byte[] { 26, -77, -63, -18, -111, 48, 35, 80 }), b.a(new byte[] { 29 }, new byte[] { 45, 100, 111, 96, -122, 107, 106, -86 }));
    TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
    treeMap.put(b.a(new byte[] { -74, -25, -40, 69, Byte.MIN_VALUE, 82, 20 }, new byte[] { -59, -120, -86, 49, -33, 48, 109, -119 }), paramHashMap.get(b.a(new byte[] { -25, -13 }, new byte[] { -123, -118, -105, -8, -116, 31, -112, -115 })));
    treeMap.put(b.a(new byte[] { 21, -58, -59, 107, 122, -34, 91, 79, 31, -54 }, new byte[] { 118, -82, -92, 5, 20, -69, 55, 16 }), paramString1);
    treeMap.put(b.a(new byte[] { 
            33, -55, -120, 89, -67, -6, -106, 73, 55, -2, 
            -114, 74 }, new byte[] { 82, -95, -25, 46, -30, -114, -17, 57 }), paramHashMap.get(b.a(new byte[] { -60, 101, 10, -50, 96 }, new byte[] { -89, 9, 107, -67, 19, 27, -57, 21 })));
    treeMap.put(b.a(new byte[] { 26, 36, 52, 112, -1, -117, -37, -120, 12 }, new byte[] { 104, 65, 83, 25, -112, -27, -124, -31 }), paramHashMap.get(b.a(new byte[] { 116, 44, 33, 97 }, new byte[] { 21, 94, 68, 0, 30, -64, 47, 108 })));
    treeMap.put(b.a(new byte[] { 70, -58, 104, -27, 13, 12, 92 }, new byte[] { 42, -89, 6, -126, 82, 101, 56, -99 }), paramHashMap.get(b.a(new byte[] { 78, 88, 126, 87 }, new byte[] { 34, 57, 16, 48, 83, 10, -108, -35 })));
    treeMap.put(b.a(new byte[] { 55, -46, 90, 38, 51, 40, -39, 113, 41, -46 }, new byte[] { 78, -73, 59, 84, 108, 90, -72, 31 }), paramHashMap.get(b.a(new byte[] { -106, -125, 33, -101 }, new byte[] { -17, -26, 64, -23, 33, 24, -47, 83 })));
    treeMap.put(b.a(new byte[] { 56, 125, -86, 93, -36 }, new byte[] { 75, 9, -53, 47, -88, -83, 92, -80 }), String.valueOf(i * 20));
    JSONArray jSONArray = (new JSONObject(l(g, treeMap))).getJSONArray(b.a(new byte[] { -116, 56, 50, 42 }, new byte[] { -32, 81, 65, 94, -14, -45, 82, -2 }));
    ArrayList<j> arrayList = new ArrayList();
    i = bool;
    byte b1 = b2;
    if (!paramString1.equals(b.a(new byte[] { 49 }, new byte[] { 6, 110, 35, -58, -66, 126, -28, -11 })))
      if (paramString1.equals(b.a(new byte[] { 24, -100 }, new byte[] { 41, -86, 108, -119, 80, 43, -58, 2 }))) {
        i = bool;
        b1 = b2;
      } else {
        i = 0;
        b1 = b2;
      }  
    while (b1 < jSONArray.length()) {
      JSONObject jSONObject = jSONArray.getJSONObject(b1);
      String str2 = jSONObject.getString(b.a(new byte[] { -32, -31, -103, 52, 110, -77, 43, 53, -9, -20 }, new byte[] { -109, -119, -10, 67, 39, -41, 104, 90 }));
      paramString1 = jSONObject.getString(b.a(new byte[] { -8, Byte.MAX_VALUE, -109, -104, -120, -44, -49, 8, -18 }, new byte[] { -117, 23, -4, -17, -36, -67, -69, 100 }));
      String str1 = jSONObject.getString(b.a(new byte[] { 94, -106, 44, 125, -72, 106, 32 }, new byte[] { 45, -2, 67, 10, -15, 7, 71, 119 }));
      j j = new j();
      if (i != 0) {
        this(str2, paramString1, i(str1), j(jSONObject), new i("rect", Float.valueOf(1.33F)));
      } else {
        this(str2, paramString1, i(str1), j(jSONObject));
      } 
      arrayList.add(j);
      b1++;
    } 
    return g.w(arrayList);
  }
  
  public OkHttpClient client() {
    if (!TextUtils.isEmpty(this.b))
      return h.b(this.b); 
    try {
      return super.client();
    } finally {
      Exception exception = null;
    } 
  }
  
  public String detailContent(List<String> paramList) {
    TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
    treeMap.put(b.a(new byte[] { 
            57, 108, -103, 123, -24, -51, -119, 46, 41, 107, 
            -110, 105 }, new byte[] { 74, 4, -10, 12, -73, -92, -19, 113 }), paramList.get(0));
    JSONObject jSONObject = (new JSONObject(l(h, treeMap))).getJSONObject(b.a(new byte[] { 111, -26, -36, -30, 87, -24 }, new byte[] { 10, -120, -88, -117, 35, -111, 42, 89 }));
    JSONArray jSONArray = jSONObject.getJSONArray(b.a(new byte[] { 50, -109, 67, -122, 78 }, new byte[] { 66, -1, 34, -1, 61, 5, 26, -29 }));
    String str = jSONObject.optString(b.a(new byte[] { -12, 106, 1, -34, 15, -102, -109, 34, -29, 103 }, new byte[] { -121, 2, 110, -87, 70, -2, -48, 77 }));
    ArrayList<String> arrayList = new ArrayList();
    for (byte b = 0; b < jSONArray.length(); b++) {
      JSONObject jSONObject1 = jSONArray.getJSONObject(b);
      String str2 = jSONObject1.getString(b.a(new byte[] { 
              10, -61, -1, 70, 40, -120, 123, -118, 14, -34, 
              -13 }, new byte[] { 111, -77, -106, 53, 71, -20, 30, -60 }));
      String str1 = str2;
      if (TextUtils.isEmpty(str2))
        str1 = b.a(new byte[] { 108, 57, -66, -109, -11, 31 }, new byte[] { -118, -85, 19, 117, 97, -95, 32, -70 }); 
      StringBuilder stringBuilder = y.b(str1);
      x.c(new byte[] { 40 }, new byte[] { 12, -112, -78, -34, -113, 113, 5, -88 }, stringBuilder, str);
      stringBuilder.append(b.a(new byte[] { -10 }, new byte[] { -87, -37, -112, -18, -82, 3, -94, -120 }));
      stringBuilder.append(jSONObject1.getString(b.a(new byte[] { 69, -26, 33, 115, -79, 56, -32, -6, 81, -17 }, new byte[] { 53, -118, 64, 10, -8, 92, -93, -107 })));
      arrayList.add(stringBuilder.toString());
    } 
    j j = new j();
    j.i(str);
    j.j(jSONObject.optString(b.a(new byte[] { 79, -31, 21, -10, 58, -116, -98, 46, 89 }, new byte[] { 60, -119, 122, -127, 110, -27, -22, 66 })));
    j.k(i(jSONObject.optString(b.a(new byte[] { -52, 46, -23, 118, -99, 47, 32 }, new byte[] { -65, 70, -122, 1, -44, 66, 71, -90 }))));
    j.g(jSONObject.optString(b.a(new byte[] { -23, 91, -111, -85, 4, 126, -86, -43 }, new byte[] { -102, 51, -2, -36, 64, 27, -39, -74 })));
    j.h(b(jSONObject.optString(b.a(new byte[] { 29, 20, -91, -107, -65, -101, -71, 75 }, new byte[] { 121, 125, -41, -16, -36, -17, -42, 57 }))));
    j.e(b(jSONObject.optString(b.a(new byte[] { 77, 74, 105, -30, -34, -42 }, new byte[] { 44, 41, 29, -115, -84, -91, -11, -45 }))));
    j.p(jSONObject.optString(b.a(new byte[] { 126, -114, -126, -78, -120, 40, -8, -33 }, new byte[] { 14, -31, -15, -58, -47, 77, -103, -83 })));
    j.f(jSONObject.optString(b.a(new byte[] { -39, 45, -101, -103, -25, 123, -44, -27, -58, 45 }, new byte[] { -85, 72, -4, -16, -120, 21, -102, -124 })));
    j.d(jSONObject.optString(b.a(new byte[] { 
              105, 71, -75, -36, 14, 70, -64, 81, 107, 66, 
              -79 }, new byte[] { 10, 47, -44, -78, 96, 35, -84, 31 })));
    j.m(TextUtils.join(b.a(new byte[] { -80 }, new byte[] { -109, 57, -105, 10, 120, -75, -68, -2 }), arrayList));
    j.n(j(jSONObject));
    j.l(b.a(new byte[] { 10, 71, -62, 92, 87, 3 }, new byte[] { -20, -12, 103, -71, -32, -73, 55, 38 }));
    return g.p(j);
  }
  
  public String homeContent(boolean paramBoolean) {
    ArrayList<b> arrayList = new ArrayList();
    LinkedHashMap<Object, Object> linkedHashMap = new LinkedHashMap<Object, Object>();
    OkHttpClient okHttpClient = client();
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    JSONObject jSONObject = new JSONObject(c(h.E(okHttpClient, e(e, hashMap), null, h())));
    for (byte b = 0; b < jSONObject.getJSONArray(b.a(new byte[] { -97, -76, -111, 92, -90, -9, 3, 68 }, new byte[] { -4, -36, -16, 50, -56, -110, 111, 55 })).length(); b++) {
      String str1 = jSONObject.getJSONArray(b.a(new byte[] { 16, -92, 39, -12, 5, -19, -92, -4 }, new byte[] { 115, -52, 70, -102, 107, -120, -56, -113 })).getJSONObject(b).get(b.a(new byte[] { -123, -90, 3, -15, -83, -73, -127, -56, -126 }, new byte[] { -26, -50, 98, -97, -61, -46, -19, -127 })).toString();
      String str2 = jSONObject.getJSONArray(b.a(new byte[] { 53, 67, -110, -36, -18, 44, -64, -17 }, new byte[] { 86, 43, -13, -78, Byte.MIN_VALUE, 73, -84, -100 })).getJSONObject(b).get(b.a(new byte[] { 
              86, -110, 67, -37, 49, 69, -21, 10, 84, -105, 
              71 }, new byte[] { 53, -6, 34, -75, 95, 32, -121, 68 })).toString();
      if (this.a || !str2.contains(b.a(new byte[] { 24, 87, -119, -66, 26, -114 }, new byte[] { -3, -38, 1, 91, -66, 18, 64, 46 }))) {
        int i;
        if (this.a && str2.contains(b.a(new byte[] { Byte.MAX_VALUE, 83, -101, 94, -47, 80 }, new byte[] { -102, -34, 19, -69, 117, -52, 56, 93 }))) {
          i = 0;
        } else {
          i = arrayList.size();
        } 
        arrayList.add(i, new b(str1, str2));
        ArrayList<d> arrayList1 = new ArrayList();
        arrayList1.add(g(b.a(new byte[] { -125, 84, 86, 100, -111, -20 }, new byte[] { 101, -38, -60, -127, 43, 99, 119, -115 }), b.a(new byte[] { -117, 87 }, new byte[] { -23, 46, -88, 22, -44, 124, 69, -55 }), jSONObject.getJSONObject(b.a(new byte[] { -2, -100, 79, -56, -76, 23, 29, 86 }, new byte[] { -115, -13, 61, -68, -57, 90, 124, 38 })).getJSONArray(str1), b.a(new byte[] { -33, -109, -102, 73, -105 }, new byte[] { -85, -6, -18, 37, -14, 38, -46, -3 }), b.a(new byte[] { -60, -47 }, new byte[] { -83, -75, -65, -49, -99, -119, -94, 124 })));
        arrayList1.add(g(b.a(new byte[] { -87, -117, -5, -95, 76, 66 }, new byte[] { 65, 33, 101, 73, -28, -62, 26, 110 }), b.a(new byte[] { 27, 66, -104, -43 }, new byte[] { 119, 35, -10, -78, 120, -5, 122, 89 }), jSONObject.getJSONArray(b.a(new byte[] { -1, 26, -109, 95, 32 }, new byte[] { -109, 123, -3, 56, 83, 72, 57, -12 })), b.a(new byte[] { 116, -41, 9, -86, -118, -109, 102, -14 }, new byte[] { 24, -74, 103, -51, -60, -14, 11, -105 }), b.a(new byte[] { 19, 97, 52, -107, 37, Byte.MAX_VALUE }, new byte[] { Byte.MAX_VALUE, 0, 90, -14, 108, 27, 90, 51 })));
        arrayList1.add(g(b.a(new byte[] { 8, 69, -29, -48, -13, -17 }, new byte[] { -19, -39, 83, 53, 126, 111, -118, 126 }), b.a(new byte[] { 104, -2, -81, -66 }, new byte[] { 9, -116, -54, -33, 70, -71, 61, 76 }), jSONObject.getJSONArray(b.a(new byte[] { -5, -51, -97, -28, -73, -42, -67 }, new byte[] { -119, -88, -8, -115, -40, -72, -50, 115 })), b.a(new byte[] { -1, -46, 82, -27, 106, 84, 109, -98, -32, -46 }, new byte[] { -115, -73, 53, -116, 5, 58, 35, -1 }), b.a(new byte[] { -115, -33, -79, 115, 43, -53, 121, -115 }, new byte[] { -1, -70, -42, 26, 68, -91, 48, -23 })));
        arrayList1.add(g(b.a(new byte[] { -17, 94, 123, 78, -103, 81 }, new byte[] { 6, -1, -27, -85, 7, -38, -22, 20 }), b.a(new byte[] { -114, -127, 12, 107, 11 }, new byte[] { -19, -19, 109, 24, 120, -74, 32, 22 }), jSONObject.getJSONObject(b.a(new byte[] { -121, -120, 4, 36, -28, -125, -21, 78 }, new byte[] { -13, -15, 116, 65, -105, -50, -118, 62 })).getJSONArray(str1), b.a(new byte[] { 
                  46, 33, -5, -107, 5, 44, 87, 81, 19, 40, 
                  -7, -121 }, new byte[] { 93, 73, -108, -30, 81, 85, 39, 52 }), b.a(new byte[] { 52, -52, 12, -98, 37, 115, 68, -33, 14, -64 }, new byte[] { 71, -92, 99, -23, 113, 10, 52, -70 })));
        arrayList1.add(g(b.a(new byte[] { -5, -65, -121, -100, 48, -27 }, new byte[] { 30, 6, 51, 120, -117, 88, -92, -56 }), b.a(new byte[] { -105, -60, -21, 15 }, new byte[] { -18, -95, -118, 125, 29, -60, -55, 39 }), jSONObject.getJSONArray(b.a(new byte[] { 63, 17, 87, 125, -42, 126, -99, 124, 35, 7 }, new byte[] { 70, 116, 54, 15, -124, 31, -13, 27 })), b.a(new byte[] { -68, 55, 79, 62 }, new byte[] { -46, 86, 34, 91, -24, 68, 72, -12 }), b.a(new byte[] { 73, -88, 45, -9 }, new byte[] { 42, -57, 73, -110, -60, 103, -127, 62 })));
        linkedHashMap.put(str1, arrayList1);
      } 
    } 
    return g.t(arrayList, linkedHashMap);
  }
  
  public String homeVideoContent() {
    if (this.a) {
      TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
      treeMap.put(b.a(new byte[] { 123, -73, -82, -76, -61, 105, 47, 81, 113, -69 }, new byte[] { 24, -33, -49, -38, -83, 12, 67, 14 }), b.a(new byte[] { 30 }, new byte[] { 41, 93, -34, -114, 78, -74, 38, 121 }));
      treeMap.put(b.a(new byte[] { 41, 86, -102, 94, -44 }, new byte[] { 90, 34, -5, 44, -96, 87, -25, -100 }), b.a(new byte[] { -56 }, new byte[] { -8, 72, 68, 89, 109, -80, 78, 100 }));
      treeMap.put(b.a(new byte[] { 51, 125, 54, -108 }, new byte[] { 94, 18, 68, -15, 5, -22, 31, -89 }), b.a(new byte[] { -62 }, new byte[] { -13, 67, -117, -41, -38, -64, -104, -115 }));
      JSONArray jSONArray1 = (new JSONObject(l(c, treeMap))).getJSONArray(b.a(new byte[] { 107, -38, 7, 64 }, new byte[] { 7, -77, 116, 52, 105, 55, -84, -81 }));
      ArrayList<j> arrayList1 = new ArrayList();
      for (byte b1 = 0; b1 < jSONArray1.length(); b1++) {
        JSONArray jSONArray2 = jSONArray1.getJSONObject(b1).getJSONArray(b.a(new byte[] { 109, -17, -14, 70 }, new byte[] { 31, Byte.MIN_VALUE, -123, 53, -90, 16, -18, -51 }));
        for (byte b2 = 0; b2 < jSONArray2.length(); b2++) {
          JSONArray jSONArray3 = jSONArray2.getJSONObject(b2).getJSONArray(b.a(new byte[] { -85, 9, 30, -108, -60 }, new byte[] { -56, 108, 114, -8, -73, -31, Byte.MIN_VALUE, 40 }));
          for (byte b3 = 0; b3 < jSONArray3.length(); b3++) {
            JSONObject jSONObject = jSONArray3.getJSONObject(b3).getJSONObject(b.a(new byte[] { -62, 37, -63, 42 }, new byte[] { -79, 77, -82, 93, 101, -44, -16, -23 }));
            arrayList1.add(new j(jSONObject.getString(b.a(new byte[] { 30, 124, -29, -3, 103, -4, -56, 93, 9, 113 }, new byte[] { 109, 20, -116, -118, 46, -104, -117, 50 })), jSONObject.getString(b.a(new byte[] { 77, -125, 67, -86, 85, Byte.MAX_VALUE, -82, -29, 91 }, new byte[] { 62, -21, 44, -35, 1, 22, -38, -113 })), i(jSONObject.getString(b.a(new byte[] { 62, 20, -46, 83, 96, 80, -120 }, new byte[] { 77, 124, -67, 36, 41, 61, -17, 81 }))), j(jSONObject)));
          } 
        } 
      } 
      return g.w(arrayList1);
    } 
    OkHttpClient okHttpClient = client();
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    JSONArray jSONArray = (new JSONObject(c(h.E(okHttpClient, e(d, hashMap), null, h())))).getJSONArray(b.a(new byte[] { -63, -76, -112, 45 }, new byte[] { -83, -35, -29, 89, 102, 17, -46, 125 }));
    ArrayList<j> arrayList = new ArrayList();
    for (byte b = 0; b < jSONArray.length(); b++) {
      JSONArray jSONArray1 = jSONArray.getJSONArray(b);
      for (byte b1 = 0; b1 < jSONArray1.length(); b1++) {
        JSONObject jSONObject = jSONArray1.getJSONObject(b1);
        arrayList.add(new j(jSONObject.getString(b.a(new byte[] { -40, 101, 89, -48, -104, -48, 13, -120, -49, 104 }, new byte[] { -85, 13, 54, -89, -47, -76, 78, -25 })), jSONObject.getString(b.a(new byte[] { 91, -38, 17, 96, -14, 58, -108, 73, 77 }, new byte[] { 40, -78, 126, 23, -90, 83, -32, 37 })), i(jSONObject.getString(b.a(new byte[] { 98, -75, 43, -110, -12, -45, -17 }, new byte[] { 17, -35, 68, -27, -67, -66, -120, -54 }))), j(jSONObject)));
      } 
    } 
    return g.w(arrayList);
  }
  
  public void init(Context paramContext, String paramString) {
    String[] arrayOfString = paramString.split(b.a(new byte[] { 51, 6, -26, -17, -84, -117 }, new byte[] { 111, 34, -70, -53, -16, -81, 109, 10 }));
    this.a = arrayOfString[0].equals(b.a(new byte[] { -11 }, new byte[] { -60, 10, 62, 111, -34, -26, -102, 119 }));
    if (arrayOfString.length > 1 && arrayOfString[1].length() > 7) {
      String str = arrayOfString[1].trim();
    } else {
      arrayOfString = null;
    } 
    this.b = (String)arrayOfString;
  }
  
  public String playerContent(String paramString1, String paramString2, List<String> paramList) {
    d.d();
    String[] arrayOfString = paramString2.split(b.a(new byte[] { 96 }, new byte[] { 63, 98, -74, -30, 22, -37, 86, 48 }));
    TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
    treeMap.put(b.a(new byte[] { 
            -58, -108, 96, 95, -38, 20, 88, -108, -42, -109, 
            107, 77 }, new byte[] { -75, -4, 15, 40, -123, 125, 60, -53 }), arrayOfString[0]);
    treeMap.put(b.a(new byte[] { 
            -45, -6, -80, 7, 104, -34, -54, -16, -64, -7, 
            -75, 27 }, new byte[] { -93, -106, -47, 126, 55, -73, -82, -81 }), arrayOfString[1]);
    treeMap.put(b.a(new byte[] { -44, -74, 29 }, new byte[] { -69, -33, 121, 3, -24, 61, 51, -115 }), b.a(new byte[] { -6 }, new byte[] { -53, 67, 82, -105, -122, 88, -29, 70 }));
    String str = a.s((new JSONObject(l(i, treeMap))).getJSONObject(b.a(new byte[] { -36, 11, -41, -113, -65, 125 }, new byte[] { -71, 101, -93, -26, -53, 4, -37, 62 })).optString(b.a(new byte[] { -39, 114, -95, 86, 85, 3, -112 }, new byte[] { -87, 30, -64, 47, 0, 113, -4, -52 })), this.b);
    g g = new g();
    g.z(str);
    g.h(h());
    return g.toString();
  }
  
  public String searchContent(String paramString, int paramInt) {
    TreeMap<Object, Object> treeMap = new TreeMap<Object, Object>();
    treeMap.put(b.a(new byte[] { 68, -25, -77, -46, -19, 98, -23 }, new byte[] { 47, -126, -54, -91, -126, 16, -115, 75 }), paramString);
    treeMap.put(b.a(new byte[] { 22, 45, 37, 12, -126 }, new byte[] { 101, 89, 68, 126, -10, -43, 86, 118 }), String.valueOf(paramInt * 20));
    String str = b.a(new byte[] { 52, -11, -45, 41, -41, -105 }, new byte[] { 87, -108, -89, 118, -66, -13, 1, 52 });
    boolean bool = this.a;
    paramInt = 0;
    if (bool) {
      paramString = b.a(new byte[] { -125 }, new byte[] { -79, 96, -106, -70, -126, 15, -91, -16 });
    } else {
      paramString = b.a(new byte[] { 35 }, new byte[] { 18, 30, -112, 30, 110, -22, 16, -18 });
    } 
    treeMap.put(str, paramString);
    treeMap.put(b.a(new byte[] { 
            6, 73, 44, 110, -33, -10, 5, 16, 25, 85, 
            37, 124 }, new byte[] { 109, 44, 85, 25, -80, -124, 97, 79 }), b.a(new byte[] { 0 }, new byte[] { 48, 85, 0, -28, -78, 27, -127, -54 }));
    JSONArray jSONArray = (new JSONObject(l(f, treeMap))).getJSONArray(b.a(new byte[] { -70, 95, -55, -106 }, new byte[] { -42, 54, -70, -30, -86, -36, -127, 121 }));
    ArrayList<j> arrayList = new ArrayList();
    while (paramInt < jSONArray.length()) {
      JSONObject jSONObject = jSONArray.getJSONObject(paramInt);
      arrayList.add(new j(jSONObject.getString(b.a(new byte[] { -55, -101, 99, -113, 64, -13, 96, 8, -34, -106 }, new byte[] { -70, -13, 12, -8, 9, -105, 35, 103 })), jSONObject.getString(b.a(new byte[] { 91, -67, 96, 32, 0, -100, -36, -12, 77 }, new byte[] { 40, -43, 15, 87, 84, -11, -88, -104 })), i(jSONObject.getString(b.a(new byte[] { 93, 44, -4, -73, -85, -91, 73 }, new byte[] { 46, 68, -109, -64, -30, -56, 46, -100 }))), j(jSONObject)));
      paramInt++;
    } 
    return g.w(arrayList);
  }
  
  public String searchContent(String paramString, boolean paramBoolean) {
    return searchContent(paramString, 0);
  }
  
  public String searchContent(String paramString1, boolean paramBoolean, String paramString2) {
    return searchContent(paramString1, Integer.parseInt(paramString2) - 1);
  }
}
