package com.example.demo.Product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class ProductEntity {

	@Id
	private Long product_id;

	@Column(length = 30) // 크기 30, null 가능
	private String product_name;

	@Column
	private String product_detail;

	@Column
	private String product_image;

	@Column(length = 30)
	private String product_country;

	@Column(length = 30)
	private String product_type;

	@Column(length = 20)
	private String product_color;

	@Column(length = 20)
	private String product_cost;

	@Column(length = 20)
	private String product_body;

	@Column(length = 20)
	private String product_acidity;

	@Column(length = 20)
	private String product_tannin;

	@Column(length = 20)
	private String product_alcohol;

	@Column
	private int product_stock;

	@Column(length = 20)
	private String product_status;
	
	
	//Getter,setter
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
		return "ProductEntity [product_id=" + product_id + ", product_name=" + product_name + ", product_detail="
				+ product_detail + ", product_image=" + product_image + ", product_country=" + product_country
				+ ", product_type=" + product_type + ", product_color=" + product_color + ", product_cost="
				+ product_cost + ", product_body=" + product_body + ", product_acidity=" + product_acidity
				+ ", product_tannin=" + product_tannin + ", product_alcohol=" + product_alcohol + ", product_stock="
				+ product_stock + ", product_status=" + product_status + "]";
	}

	//삽입 구현
	public static ProductEntity toInsertEntity(ProductDTO productDTO) {
		ProductEntity productEntity = new ProductEntity();
		productEntity.setProduct_id(productDTO.getProduct_id());
		productEntity.setProduct_name(productEntity.getProduct_name());
		productEntity.setProduct_detail(productEntity.getProduct_detail());
		productEntity.setProduct_image(productEntity.getProduct_image());
		productEntity.setProduct_country(productEntity.getProduct_country());
		productEntity.setProduct_type(productEntity.product_type);
		productEntity.setProduct_color(productEntity.getProduct_color());
		productEntity.setProduct_cost(productEntity.getProduct_cost());
		productEntity.setProduct_body(productEntity.getProduct_body());
		productEntity.setProduct_acidity(productEntity.getProduct_acidity());
		productEntity.setProduct_tannin(productEntity.getProduct_tannin());
		productEntity.setProduct_alcohol(productEntity.getProduct_alcohol());
		productEntity.setProduct_stock(productEntity.getProduct_stock());
		productEntity.setProduct_status(productEntity.getProduct_status());
		return productEntity;
	}

}
