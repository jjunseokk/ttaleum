package com.example.demo.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter // getter, setter 생략
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class ProductDTO {
	private Long product_id;
	private String product_name;
	private String product_detail;
	private String product_image;
	private String product_country;
	private String product_type;
	private String product_color;
	private String product_cost;
	private String product_body;
	private String product_acidity;
	private String product_tannin;
	private String product_alcohol;
	private int product_stock;
	private String product_status;
	
	public Long getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_detail() {
		return product_detail;
	}
	public void setProduct_detail(String product_detail) {
		this.product_detail = product_detail;
	}
	public String getProduct_image() {
		return product_image;
	}
	public void setProduct_image(String product_image) {
		this.product_image = product_image;
	}
	public String getProduct_country() {
		return product_country;
	}
	public void setProduct_country(String product_country) {
		this.product_country = product_country;
	}
	public String getProduct_type() {
		return product_type;
	}
	public void setProduct_type(String product_type) {
		this.product_type = product_type;
	}
	public String getProduct_color() {
		return product_color;
	}
	public void setProduct_color(String product_color) {
		this.product_color = product_color;
	}
	public String getProduct_cost() {
		return product_cost;
	}
	public void setProduct_cost(String product_cost) {
		this.product_cost = product_cost;
	}
	public String getProduct_body() {
		return product_body;
	}
	public void setProduct_body(String product_body) {
		this.product_body = product_body;
	}
	public String getProduct_acidity() {
		return product_acidity;
	}
	public void setProduct_acidity(String product_acidity) {
		this.product_acidity = product_acidity;
	}
	public String getProduct_tannin() {
		return product_tannin;
	}
	public void setProduct_tannin(String product_tannin) {
		this.product_tannin = product_tannin;
	}
	public String getProduct_alcohol() {
		return product_alcohol;
	}
	public void setProduct_alcohol(String product_alcohol) {
		this.product_alcohol = product_alcohol;
	}
	public int getProduct_stock() {
		return product_stock;
	}
	public void setProduct_stock(int product_stock) {
		this.product_stock = product_stock;
	}
	public String getProduct_status() {
		return product_status;
	}
	public void setProduct_status(String product_status) {
		this.product_status = product_status;
	}
	
	@Override
	public String toString() {
		return "ProductDTO [product_id=" + product_id + ", product_name=" + product_name + ", product_detail="
				+ product_detail + ", product_image=" + product_image + ", product_country=" + product_country
				+ ", product_type=" + product_type + ", product_color=" + product_color + ", product_cost="
				+ product_cost + ", product_body=" + product_body + ", product_acidity=" + product_acidity
				+ ", product_tannin=" + product_tannin + ", product_alcohol=" + product_alcohol + ", product_stock="
				+ product_stock + ", product_status=" + product_status + "]";
	}
	// 전체 조회
	public static ProductDTO toProductDTO(ProductEntity productEntity) {
		ProductDTO productDTO = new ProductDTO();
		productDTO.setProduct_id(productEntity.getProduct_id());
		productDTO.setProduct_name(productEntity.getProduct_name());
		productDTO.setProduct_detail(productEntity.getProduct_detail());
		productDTO.setProduct_image(productEntity.getProduct_image());
		productDTO.setProduct_country(productEntity.getProduct_country());
		productDTO.setProduct_type(productEntity.getProduct_type());
		productDTO.setProduct_color(productEntity.getProduct_color());
		productDTO.setProduct_cost(productEntity.getProduct_cost());
		productDTO.setProduct_body(productEntity.getProduct_body());
		productDTO.setProduct_acidity(productEntity.getProduct_acidity());
		productDTO.setProduct_tannin(productEntity.getProduct_tannin());
		productDTO.setProduct_alcohol(productEntity.getProduct_alcohol());
		productDTO.setProduct_stock(productEntity.getProduct_stock());
		productDTO.setProduct_status(productEntity.getProduct_status());
		return productDTO;
	}
}
