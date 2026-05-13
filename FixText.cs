using System;
using System.IO;
using System.Collections.Generic;
using System.Web.Script.Serialization;

public class FixText {
    public static void Main() {
        string path = @"c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal\leaders-talk.html";
        string jsonPath = @"c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal\replacements.json";
        
        string html = File.ReadAllText(path, System.Text.Encoding.UTF8);
        string json = File.ReadAllText(jsonPath, System.Text.Encoding.UTF8);
        
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        var replacements = serializer.Deserialize<Dictionary<string, string>>(json);
        
        foreach(var kv in replacements) {
            html = html.Replace(kv.Key, kv.Value);
        }
        
        html = html.Replace("Trang ch?", "Trang chủ");
        html = html.Replace("Kh?i V?n Ph?ng", "Khối Văn Phòng");
        html = html.Replace("Kh?i Th? Tr??ng", "Khối Thị Trường");
        html = html.Replace("Kh?i H?ng N?ng", "Khối Hàng Nặng");
        html = html.Replace("S?p Di?n Ra", "Sắp Diễn Ra");
        html = html.Replace("C?n ?t ch?", "Còn ít chỗ");
        html = html.Replace("?inh H? Nho Th?ng", "Đinh Hồ Nho Thông");
        html = html.Replace("Di?n gi?", "Diễn giả");
        html = html.Replace("T?ng quan", "Tổng quan");
        
        File.WriteAllText(@"c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal\leaders-talk-fixed2.html", html, System.Text.Encoding.UTF8);
        Console.WriteLine("Done in C#");
    }
}
