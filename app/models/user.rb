class User < ApplicationRecord
    VALID_EMAIL = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    validates :email, presence: true, length: { minimum: 5 },
    format: { with: VALID_EMAIL }, uniqueness: true
    validates :password, presence: true, length: { minimum: 5},
    uniqueness: false
    validates :nome, presence: true, length: { minimum: 0 },
    uniqueness: false
    has_secure_password
end
