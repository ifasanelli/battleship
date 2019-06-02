class MainController < ApplicationController
    def home
        @pontos = current_user.scores
        if (@pontos.count != 0)
            @pontos = @pontos.count * 100
        else
            @pontos = 0
        end
    end
    
    def placar
        @users = User.all
    end

end
