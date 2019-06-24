class Api::BillsController < ApplicationController

    def index
        @bills = Bill.all
        render :index
    end

    def show
        @bill = Bill.find(params[:id])
        render :show
    end

    def create
        @bill = current_user.bills.create(bill_params)
        if @bill.save
            @payer_ids = payment_params[:payer_ids]
            @self_checked = payment_params[:self_checked]
            
            if @self_checked == "true"
                @slices = @payer_ids.length + 1
            else
                @slices = @payer_ids.length
            end

            @amount_per_slice = (bill_params[:total_amount].to_i / @slices)
        
            @payer_ids.each do |id|
                Payment.create(bill_id: @bill.id, user_id: id.to_i, initial_amount: @amount_per_slice, paid_amount: 0.00)
            end
            
            @payments = Payment.all.where(bill_id: @bill.id)

            @comments = Comment.all.where(bill_id: @bill.id)
            
            @users = []

            @payments.each do |payment|
                @users << User.find(payment.user_id)
            end

            @users << User.find(@bill.biller_id)
            
            render :show
        else
            render json: ["Unable to create bill"], status: 422
        end
    end

    def update
        @bill = current_user.bills.find(params[:id])
        if @bill.update(bill_params)
            render :show
        else
            render json: ["Unable to edit bill"], status: 422
        end
    end

    def destroy
        @bill = Bill.find(params[:id])
    
        @payments = @bill.payments

        @comments = @bill.comments
        
        @users = []
        
        @payments.each do |payment|
            @users << User.find(payment.user_id)
        end
        
        @users << User.find(@bill.biller_id)
        
        @payments.each do |payment|
            payment.destroy
        end

        @comments.each do |comment|
            comment.destroy
        end
        
        @bill.destroy

        render :show
    end

    private

    def bill_params
        params.require(:bill).permit(:biller_id, :category, :description, :total_amount)
    end

    def payment_params
        params.require(:payment).permit(:self_checked, payer_ids: [])
    end

end