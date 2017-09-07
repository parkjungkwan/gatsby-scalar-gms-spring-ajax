package com.gms.web.products;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Lazy @Component
public class PathDTO {
	private String ctx,img,js,css;

	public String getCtx() {
		return ctx;
	}

	public void setCtx(String ctx) {
		this.ctx = ctx;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getJs() {
		return js;
	}

	public void setJs(String js) {
		this.js = js;
	}

	public String getCss() {
		return css;
	}

	public void setCss(String css) {
		this.css = css;
	}
	
}
