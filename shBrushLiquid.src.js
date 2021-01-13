/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var objs	=	'all_products article.author article.comment_post_url article.comments article.comments_count ' +
      'article.comments_enabled? article.content article.created_at article.excerpt article.id article.liquid ' +
      'article.moderated article.published_at article.tags article.title article.url blog.all_tags blog.articles ' +
      'blog.articles_count blog.comments_enabled? blog.handle blog.id blog.liquid blog.moderated '+
      'blog.next_article blog.previous_article blog.tags blog.title blog.url blogs cart.attributes cart.item_count ' +
      'cart.items cart.note cart.total_price cart.total_weight collection.all_products collection.all_products_count ' +
      'collection.all_tags collection.all_types collection.all_vendors collection.description collection.handle ' +
      'collection.id collection.liquid collection.next_product collection.previous_product collection.products ' +
      'collection.products_count collection.tags collection.title collection.url collections comment.author ' +
      'comment.content comment.email comment.id comment.status comment.url current_tags customer.accepts_marketing ' +
      'customer.addresses customer.addresses_count customer.default_address customer.email customer.first_name ' +
      'customer.has_account customer.id customer.last_name image.alt image.id image.position ' +
      'image.product_id image.src link.active link.object link.title link.type link.url linklist.handle ' +
      'linklist.links linklist.object linklist.title linklists page page.author page.content page.handle ' +
      'page.id page.title page.url page_description page_title pages.liquid product.available ' +
      'product.collections product.compare_at_price_max product.compare_at_price_min ' +
      'product.compare_at_price_varies product.content product.description product.featured_image ' +
      'product.handle product.id product.images product.options product.price product.price_max ' +
      'product.price_min product.price_varies product.selected_or_first_available_variant ' +
      'product.selected_variant product.tags product.template_suffix product.title product.type ' +
      'product.url product.variants product.vendor shop.address.city shop.address.country ' +
      'shop.address.province shop.address.street shop.address.summary shop.address.zip ' +
      'shop.collections_count shop.currency shop.description shop.domain shop.email ' +
      'shop.enabled_payment_types shop.locale shop.metafields shop.money_format ' +
      'shop.money_with_currency_format shop.name shop.password_message shop.permanent_domain ' +
      'shop.products_count shop.types shop.url shop.vendors variant.available variant.compare_at_price ' +
      'variant.id variant.image variant.inventory_management variant.inventory_quantity variant.option1 ' +
      'variant.option2 variant.option3 variant.price variant.sku variant.title variant.weight';

		var filters =	'escape append prepend size join downcase upcase strip_html strip_newlines truncate truncatewords date ' +
      'first last newline_to_br replace replace_first remove remove_first split plus minus asset_url camelize capitalize ' +
      'default_pagination global_asset_url handleize img_tag link_to link_to_vendor link_to_type link_to_tag ' +
      'link_to_add_tag link_to_remove_tag highlight_active_tag money_with_currency money_without_currency money ' +
      'pluralize product_img_url sort_by script tag stylesheet_tag url_for_type url_for_vendor weight_with_unit within';
		
		var keywords	= 'or and contains with comment raw if endif elsif unless endunless case cycle for endfor ' +
      'tablerow assign increment decrement capture endcapture include ' +
      'forloop.length forloop.index forloop.index0 forloop.rindex forloop.rindex0 forloop.first forloop.last ' +
      'paginate.page_size paginate.current_page paginate.current_offset paginate.pages paginate.items ' +
      'paginate.previous paginate.previous.title paginate.previous.url paginate.next paginate.next.url ' +
      'paginate.parts part.is_link';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: new RegExp(this.getKeywords(filters), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(objs), 'gmi'),	css: 'functions' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['liquid'];

	SyntaxHighlighter.brushes.Liquid = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
