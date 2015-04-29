class Contact < MailForm::Base
	attribute :name, 		:validate => true 
	attribute :email,		:validate => /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	attribute :message	
	attribute :nickname,	:captcha => true 

	def headers
		{
			:subject => "kelloggwebstudio message",
			:to		 => "kelloggwebstudio@gmail.com",
			:from 	 => %("#{name}" <#{email}) 
		}
	end
end