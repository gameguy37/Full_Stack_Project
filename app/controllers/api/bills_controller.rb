class Api::BillsController < ApplicationController

    def index
        @bills = Bill.all
        render json: @bills
    end

    def show
        @bill = Bill.find(params[:id])
        render :show
    end

    def create
        @bill = current_user.bills.create(bill_params)
        if @bill.save
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
        @bill = current_user.bills.find(params[:id])
        @bill.destroy
    end

    private

    def bill_params
        params.require(:bill).permit(:biller_id, :category, :description, :total_amount)
    end

end