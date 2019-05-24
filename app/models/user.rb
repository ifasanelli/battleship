class User < ApplicationRecord
    VALID_EMAIL = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    validates :email, presence: true, length: { minimum: 5 },   #Validação e-mail
    format: { with: VALID_EMAIL }, uniqueness: true 
    
    validates :password, presence: true, length: { minimum: 5}, uniqueness: false  #validação senha
    has_secure_password
    
    validates :nome, presence: true, length: { minimum: 0 }, uniqueness: false    #validação nome
end
