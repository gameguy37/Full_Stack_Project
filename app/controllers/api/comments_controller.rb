class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: ["Unable to create comment"], status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render :show
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :bill_id, :body)
    end

end